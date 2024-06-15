<?php

namespace App\Http\Controllers;

use App\Models\DataPenjualan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DataPenjualanController extends Controller
{
    public function getData()
    {
        $data = DataPenjualan::all();
        return response()->json([
            'data' => $data
        ]);
    }

    public function postData(Request $request)
    {
        $vld = Validator::make($request->all(), [
            'mitra_id' => 'required',
            'no_hp' => 'required',
            'alamat' => 'required',
            'tanggal' => 'required|date',
            'kode_transaksi' => 'required',
            'keterangan' => 'required',
            'kuantitas' => 'required',
            'harga_satuan' => 'required',
            'harga_jual' => 'required',
            'referensi' => 'required',
            'dasar_pengenaan_pajak' => 'required',
            'harga_jual_inc_pajak' => 'required'
        ]);

        if($vld->fails()) {
            return response()->json([
                'message' => $vld->messages()
            ], 400);
        }

        $data = DataPenjualan::create($request->all());
        return response()->json([
            'data' => $data
        ]);
        
    }
}
