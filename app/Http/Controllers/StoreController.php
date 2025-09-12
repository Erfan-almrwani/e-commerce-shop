<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function products()
    {
        $products = [
            ['name' => 'Smartphone', 'price' => 599.99, 'on_sale' => true, 'description' => 'High-end smartphone'],
            ['name' => 'Headphones', 'price' => 129.99, 'on_sale' => false, 'description' => 'Wireless headphones'],
            ['name' => 'Smart Watch', 'price' => 249.99, 'on_sale' => true, 'description' => 'Smart fitness watch'],
        ];

        return view('shop.products', compact('products'));
    }

    public function productDetails()
    {
        $product = ['name' => 'Smartphone', 'price' => 599.99, 'on_sale' => true, 'description' => 'High-end smartphone'];

        return view('shop.product-details', compact('product'));
    }

    public function about()
    {
        $title = "About Our Store";
        $description = "We provide the best products for our customers.";
        $rawHtml = "<strong>Trusted by thousands of customers worldwide!</strong>";

        return view('shop.about-us', compact('title', 'description', 'rawHtml'));
    }

    public function cart()
    {
        return view('shop.cart');
    }

    public function contact()
    {
        return view('shop.contact');
    }
}
