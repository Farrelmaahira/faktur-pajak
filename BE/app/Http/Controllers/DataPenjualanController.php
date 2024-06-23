<?php

namespace App\Http\Controllers;

use App\Http\Resources\DataPenjualanResource;
use App\Models\DataPenjualan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DataPenjualanController extends Controller
{
    public function getData(Request $request)
    {
        $date = $request->query('date');
        
        if ($date) {
            $data = DataPenjualan::where('tanggal', $date)->get();
        } else {
            $data = DataPenjualan::all();
        }
        
        return response()->json([
            'data' => DataPenjualanResource::collection($data)
        ]);
    }

    public function getById($id)
    {
        $data = DataPenjualan::find($id);
        if($data == null) {
            return response()->json([
                'message' => 'data not found'
            ], 404);
        }
        return response()->json(new DataPenjualanResource($data));
    }

    public function postData(Request $request)
    {
        $vld = Validator::make($request->all(), [
            'mitra_id' => 'required',
            'tanggal' => 'required|date',
            'kode_transaksi' => 'required',
            'kuantitas' => 'required',
            'harga_jual' => 'required',
            'referensi' => 'required',
            'bkp' => 'required'
        ]);

        if ($vld->fails()) {
            return response()->json([
                'message' => $vld->messages()
            ], 400);
        }

        $data = DataPenjualan::create([
            'mitra_id' => $request->mitra_id,
            'tanggal' => $request->tanggal,
            'kode_transaksi' => $request->kode_transaksi,
            'kuantitas' => $request->kuantitas,
            'harga_jual' => $request->harga_jual,
            'referensi' => $request->referensi,
            'bkp' => $request->bkp
        ]);
        return response()->json([
            'data' => $data
        ]);
    }

    public function deleteData($id)
    {
        $data = DataPenjualan::find($id);
        if (is_null($data)) {
            return response()->json([
                'message' => 'Data not found'
            ], 404);
        }

        $data->delete();
        if ($data) {
            return response()->json([
                'message' => 'Data has been deleted'
            ]);
        }
    }
}
