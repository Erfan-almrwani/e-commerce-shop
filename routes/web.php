<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\StoreController;

Route::get('/', function () {
    return view('index');
});
Route::get('/shop',[ShopController::class, 'index']);
Route::get('/products', [StoreController::class, 'products']);
Route::get('/product-details', [StoreController::class, 'productDetails']);
Route::get('/cart', [StoreController::class, 'cart']);
Route::get('/about-us', [StoreController::class, 'about']);
Route::get('/contact', [StoreController::class, 'contact']);