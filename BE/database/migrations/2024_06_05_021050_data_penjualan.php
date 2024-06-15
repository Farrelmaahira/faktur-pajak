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
            $table->string('no_hp');
            $table->string('alamat');
            $table->date('tanggal');
            $table->integer('kode_transaksi');
            $table->string('keterangan');
            $table->integer('kuantitas');
            $table->integer('harga_satuan');
            $table->string('harga_jual');
            $table->string('referensi');
            $table->integer('dasar_pengenaan_pajak');
            $table->integer('harga_jual_inc_pajak');
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
