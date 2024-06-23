<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DataPenjualanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function(){
    Route::controller(AuthController::class)->prefix('auth')->group(function(){
        Route::post('/login', 'login');
        Route::post('/logout', 'logout')->middleware('auth:sanctum');
    });

    Route::controller(DataPenjualanController::class)->group(function(){
        Route::get('/data-penjualan', 'getData')->middleware('auth:sanctum');
        Route::post('/data-penjualan', 'postData')->middleware('auth:sanctum');
        Route::delete('/data-penjualan/{id}', 'deleteData')->middleware('auth:sanctum');    
        Route::get('/data-penjualan/{id}', 'getById')->middleware('auth:sanctum');
    });      
});
