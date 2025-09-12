@extends('layouts.app')

@section('title', 'Products')

@section('content')
<h1>All Products</h1>

@unless(count($products))
<p>No products currently available</p>
@else
<ul>
    @foreach($products as $product)
    <li>
        #{{ $loop->index + 1 }} - {{ $product['name'] }} ({{ $product['price'] }} USD)

        @if($product['on_sale'])
        <span style="color:red;">Sale!</span>
        @else
        <span>Regular Price</span>
        @endif

        <p>{{ $product['description'] }}</p>

        @if($loop->first)
        <strong>🔥 Featured Product</strong>
        @endif
    </li>
    @endforeach
</ul>
@endunless
@endsection