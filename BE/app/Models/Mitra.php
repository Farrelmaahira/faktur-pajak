<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mitra extends Model
{
    use HasFactory;
    protected $connection = 'scpp';
    protected $table = 'mitras';
    protected $primaryKey = 'id';
}
