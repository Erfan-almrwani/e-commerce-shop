<header>
    <div class="container header-content">
        <div class="logo">
            <a href="{{ url('/') }}">ShopEasy</a>
        </div>
        <nav>
            <ul>
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/products') }}">Products</a></li>
                <li><a href="{{ url('/about-us') }}">About Us</a></li>
                <li><a href="{{ url('/contact') }}">Contact</a></li>
                <li class="cart-icon">
                    <a href="{{ url('/cart') }}">Cart</a>
                    <span class="cart-count">0</span>
                </li>
            </ul>
        </nav>
    </div>
</header>