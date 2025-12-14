<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    protected $table = 'prices';
    protected $fillable = [
        'car_id',
        'price_1_day',
        'price_3_day',
        'price_7_day',
        'price_30_day'
    ];
}