@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
<div class="container">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us:</p>
    <form class="contact-form">
        <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn">Send Message</button>
    </form>
</div>
@endsection