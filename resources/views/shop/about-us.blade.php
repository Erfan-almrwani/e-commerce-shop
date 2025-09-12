@extends('layouts.app')

@section('title', 'About Us')

@section('content')
<div class="container">
    <h1>About Our Store</h1>
    <p>
        We are dedicated to providing the best products and shopping experience for our customers.
        Our store has a wide selection of items to fit every need.
    </p>
    <p>
        <strong>Our Mission:</strong> Deliver quality and value at the best prices.
    </p>
    <p>&copy; {{ date('Y') }} ShopEasy. All rights reserved.</p>
</div>
@endsection