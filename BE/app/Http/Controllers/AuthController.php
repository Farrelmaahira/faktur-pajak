<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $vld = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'min:4|required'
        ]);

        if($vld->fails()) {
            return response()->json([
                'message' => $vld->messages()
            ], 400);
        }

        $user = User::where('username', $request->username)->first();

        if(is_null($user) || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid username or password'
            ], 401);
        }

        $token = $user->createToken('akuntansi')->plainTextToken;

        return response()->json([
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        if($user) {
            return response()->json([
                'message' => 'user has been logged out'
            ]);
        }
    }
}
