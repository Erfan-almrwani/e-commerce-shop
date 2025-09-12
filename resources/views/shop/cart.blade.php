@extends('layouts.app')

@section('title', 'Shopping Cart')

@section('content')
<div class="container">
    <h1>Your Shopping Cart</h1>
    <table class="cart-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Product 1</td>
                <td>1</td>
                <td>$99.99</td>
                <td>$99.99</td>
            </tr>
            <tr>
                <td>Product 2</td>
                <td>2</td>
                <td>$149.99</td>
                <td>$299.98</td>
            </tr>
        </tbody>
    </table>
    <div class="cart-summary">
        <h3>Total: $399.97</h3>
        <button class="btn">Proceed to Checkout</button>
    </div>
</div>
@endsection