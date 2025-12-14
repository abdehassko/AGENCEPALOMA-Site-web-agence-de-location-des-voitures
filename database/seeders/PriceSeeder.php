<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Price::insert([
        ['car_id' => 1, 'one_day' => 250, 'three_days' => 600, 'seven_days' => 1200, 'month_price' => 3500],
        ['car_id' => 2, 'one_day' => 300, 'three_days' => 750, 'seven_days' => 1500, 'month_price' => 4000],
    ]);
    }
}