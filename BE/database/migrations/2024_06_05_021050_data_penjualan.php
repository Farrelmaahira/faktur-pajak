<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('data_penjualan', function(Blueprint $table){
            $table->id();
            $table->string('mitra_id');
            $table->date('tanggal');
            $table->string('kode_transaksi');
            $table->string('bkp');
            $table->integer('kuantitas');
            $table->string('harga_jual');
            $table->string('referensi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
