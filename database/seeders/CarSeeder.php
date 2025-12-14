<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Car::insert([
        ['model' => 'Dacia Logan', 'year' => 2020, 'image' => 'logan.jpg'],
        ['model' => 'Clio 4', 'year' => 2021, 'image' => 'clio4.jpg'],
    ]);
    }
}