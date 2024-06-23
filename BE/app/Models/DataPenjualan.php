<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPenjualan extends Model
{
    use HasFactory;

    protected $table = 'data_penjualan';

    protected $guarded = [];

    public function mitra() 
    {
        return $this->belongsTo(Mitra::class, 'mitra_id', 'id');
    }
}

