<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_id')
                  ->constrained('cars')
                  ->onDelete('cascade');
            // Prices for different durations (nullable in case you don't use a field)
            $table->decimal('price_1_day', 10, 2)->nullable();
            $table->decimal('price_3_days', 10, 2)->nullable();
            $table->decimal('price_7_days', 10, 2)->nullable();
            $table->decimal('price_30_days', 10, 2)->nullable();
            // Optional: a general price column if you want a default/daily price
            $table->decimal('default_daily_price', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prices');
    }
};