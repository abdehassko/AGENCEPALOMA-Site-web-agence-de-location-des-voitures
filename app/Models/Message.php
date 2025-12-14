<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'message',
        'created_at',
        'updated_at'
    ];
}