@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Welcome to ShopEasy</h1>
            <p>Your one-stop shop for all your needs</p>
            <a href="{{ url('/products') }}" class="btn">Shop Now</a>
        </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products container">
        <h2>Featured Products</h2>
        <div class="products-grid">
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Premium Smartphone">
                <div class="product-info">
                    <h3>Premium Smartphone</h3>
                    <p class="price">$599.99</p>
                    <button class="btn" onclick="addToCart(1, 'Premium Smartphone', 599.99, 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')">Add to Cart</button>
                    <a href="{{ url('/product-details') }}" class="btn">Details</a>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Wireless Headphones">
                <div class="product-info">
                    <h3>Wireless Headphones</h3>
                    <p class="price">$129.99</p>
                    <button class="btn" onclick="addToCart(2, 'Wireless Headphones', 129.99, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')">Add to Cart</button>
                    <a href="{{ url('/product-details') }}" class="btn">Details</a>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80" alt="Smart Watch">
                <div class="product-info">
                    <h3>Smart Watch</h3>
                    <p class="price">$249.99</p>
                    <button class="btn" onclick="addToCart(3, 'Smart Watch', 249.99, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80')">Add to Cart</button>
                    <a href="{{ url('/product-details') }}" class="btn">Details</a>
                </div>
            </div>
        </div>
    </section>
@endsection
