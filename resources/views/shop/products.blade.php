@extends('layouts.app')

@section('title', 'Products')

@section('content')
<div class="container">
    <h1>Our Products</h1>
    <div class="products-grid">
        <div class="product-card">
            <img src="{{ asset('images/product1.jpg') }}" alt="Product 1">
            <h3>Product 1</h3>
            <p>$99.99</p>
            <a href="{{ url('/product-details') }}" class="btn">View Details</a>
        </div>
        <div class="product-card">
            <img src="{{ asset('images/product2.jpg') }}" alt="Product 2">
            <h3>Product 2</h3>
            <p>$149.99</p>
            <a href="{{ url('/product-details') }}" class="btn">View Details</a>
        </div>
        <div class="product-card">
            <img src="{{ asset('images/product3.jpg') }}" alt="Product 3">
            <h3>Product 3</h3>
            <p>$199.99</p>
            <a href="{{ url('/product-details') }}" class="btn">View Details</a>
        </div>
    </div>
</div>
@endsection