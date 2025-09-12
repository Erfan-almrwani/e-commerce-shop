@extends('layouts.app')

@section('title', 'Product Details')

@section('content')
<div class="container">
    <h1>Product Details</h1>
    <div class="product-details">
        <img src="{{ asset('images/product1.jpg') }}" alt="Product 1">
        <div class="details">
            <h2>Product 1</h2>
            <p class="price">$99.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique tortor.</p>
            <button class="btn">Add to Cart</button>
        </div>
    </div>
</div>
@endsection