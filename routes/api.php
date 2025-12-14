<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\PriceController;
use App\Http\Controllers\Api\ReservationController;
use App\Http\Controllers\Api\MessageController;

Route::get('/cars', [CarController::class, 'index']);
Route::get('/cars/{id}', [CarController::class, 'show']);

Route::get('/prices', [PriceController::class, 'index']);
Route::get('/prices/{car_id}', [PriceController::class, 'show']);

Route::post('/reservations/check', [ReservationController::class, 'checkAvailability']);
Route::post('/reservations', [ReservationController::class, 'store']);

Route::post('/contact', [MessageController::class, 'store']);
?>