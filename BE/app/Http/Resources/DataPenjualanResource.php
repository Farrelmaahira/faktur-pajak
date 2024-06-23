<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DataPenjualanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'mitra_id' => $this->mitra_id,
            'tanggal' => $this->tanggal,
            'kode_transaksi' => $this->kode_transaksi,
            'keterangan' => $this->keterangan,
            'kuantitas' => $this->kuantitas,
            'harga_satuan' => $this->hargasatuan,
            'harga_jual' => $this->harga_jual,
            'referensi' => $this->referensi,
            'dasar_pengenaan_pajak' => $this->dasar_pengenaan_pajak,
            'harga_jual_inc_pajak' => $this->harga_jual_inc_pajak,
            'mitra' => $this->mitra
        ];
    }
}
