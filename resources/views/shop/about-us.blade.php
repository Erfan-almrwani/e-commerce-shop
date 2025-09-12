@extends('layouts.app')

@section('title', 'About Us')

@section('content')
<h1>{{ $title }}</h1>
<p>{{ $description }}</p>

<div>{!! $rawHtml !!}</div>

@php
$author = "ShopEasy Team";
@endphp
<p>&copy; {{ date('Y') }} - {{ $author }}</p>
@endsection