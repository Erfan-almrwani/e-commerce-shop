<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'E-commerce Store')</title>

    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/responsive.css') }}">

    <!-- Extra styles (page-specific) -->
    @yield('styles')
</head>

<body>

    <!-- Header -->
    @include('partials.header')

    <!-- Main Content -->
    <main class="page-content">
        @yield('content')
    </main>

    <!-- Footer -->
    @include('partials.footer')

    <!-- Main JS -->
    <script src="{{ asset('js/main.js') }}"></script>

    <!-- Extra scripts (page-specific) -->
    @yield('scripts')
</body>

</html>