<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Price;


class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Price::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $price = Price::create($request->all());
        return response()->json($price, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($car_id)
    {
        $price = Price::where('car_id', $car_id)->first();

        if (!$price) {
            return response()->json(['message' => 'Price not found'], 404);
        }

        return $price;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $price = Price::findOrFail($id);
        $price->update($request->all());
        return response()->json($price, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Price::destroy($id);
        return response()->json(['message' => 'Deleted'], 200);
    }
}