<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $table = 'cars';

    protected $fillable = [
        'name',
        'brand',
        'model',
        'transmission',
        'seats',
        'daily_price',
        'image_url',
        'description'
    ];
}