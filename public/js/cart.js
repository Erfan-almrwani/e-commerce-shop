// Cart JavaScript

// DOM Content Loaded for cart
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("cart.html")) {
    loadCartItems();
    setupCartInteractions();
  }
});

// Load cart items
function loadCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cartItemsContainer) return;

  // Clear existing content
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    // Show empty cart message
    cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <p>Your cart is empty.</p>
                <a href="products.html" class="btn">Continue Shopping</a>
            </div>
        `;

    // Update summary with zeros
    updateCartSummary(0, 0, 0, 0);
    return;
  }

  // Display cart items
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                ${
                  item.color
                    ? `<div>Color: <span style="display:inline-block;width:15px;height:15px;background-color:${item.color};border-radius:50%;"></span></div>`
                    : ""
                }
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateCartQuantity(${
                  item.id
                }, ${item.quantity - 1}, '${item.color}')">-</button>
                <input type="number" class="quantity-input" value="${
                  item.quantity
                }" min="1" onchange="updateCartQuantity(${
      item.id
    }, parseInt(this.value), '${item.color}')">
                <button class="quantity-btn" onclick="updateCartQuantity(${
                  item.id
                }, ${item.quantity + 1}, '${item.color}')">+</button>
            </div>
            <div class="cart-item-total">$${(
              item.price * item.quantity
            ).toFixed(2)}</div>
            <button class="remove-item" onclick="removeFromCart(${item.id}, '${
      item.color
    }')">×</button>
        `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Update cart summary
  updateCartSummary(calculateCartTotals(cart));
}

// Calculate cart totals
function calculateCartTotals(cart) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 9.99) : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return {
    subtotal: subtotal,
    shipping: shipping,
    tax: tax,
    total: total,
  };
}

// Update cart summary
function updateCartSummary(totals) {
  document.getElementById(
    "cart-subtotal"
  ).textContent = `$${totals.subtotal.toFixed(2)}`;
  document.getElementById(
    "cart-shipping"
  ).textContent = `$${totals.shipping.toFixed(2)}`;
  document.getElementById("cart-tax").textContent = `$${totals.tax.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${totals.total.toFixed(
    2
  )}`;
}

// Setup cart interactions
function setupCartInteractions() {
  // Apply coupon button
  const applyCouponBtn = document.getElementById("apply-coupon");
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener("click", function () {
      const couponCode = document.getElementById("coupon-code").value;

      if (couponCode.toUpperCase() === "SAVE10") {
        // Apply 10% discount
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totals = calculateCartTotals(cart);
        const discount = totals.subtotal * 0.1;

        document.getElementById("cart-subtotal").innerHTML = `
                    <span style="text-decoration: line-through;">$${totals.subtotal.toFixed(
                      2
                    )}</span>
                    <span>$${(totals.subtotal - discount).toFixed(2)}</span>
                `;

        document.getElementById("cart-total").innerHTML = `
                    <span style="text-decoration: line-through;">$${totals.total.toFixed(
                      2
                    )}</span>
                    <span>$${(totals.total - discount).toFixed(2)}</span>
                `;

        // Add discount row
        const discountRow = document.createElement("div");
        discountRow.className = "summary-row";
        discountRow.innerHTML = `
                    <span>Discount (SAVE10):</span>
                    <span style="color: #28a745;">-$${discount.toFixed(
                      2
                    )}</span>
                `;

        document
          .querySelector(".summary-details")
          .insertBefore(
            discountRow,
            document.querySelector(".summary-row.total")
          );

        alert("Coupon applied successfully!");
      } else {
        alert("Invalid coupon code. Please try again.");
      }
    });
  }

  // Proceed to checkout button
  const checkoutBtn = document.getElementById("proceed-checkout");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        alert(
          "Your cart is empty. Please add items before proceeding to checkout."
        );
        return;
      }

      alert("In a real application, this would redirect to the checkout page.");
      // window.location.href = 'checkout.html';
    });
  }

  // Load recently viewed products
  loadRecentlyViewed();
}

// Load recently viewed products
function loadRecentlyViewed() {
  const recentlyViewedContainer = document.getElementById("recently-viewed");
  const recentlyViewed =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  if (!recentlyViewedContainer || recentlyViewed.length === 0) {
    if (recentlyViewedContainer) {
      recentlyViewedContainer.closest(".recently-viewed").style.display =
        "none";
    }
    return;
  }

  // Clear existing content
  recentlyViewedContainer.innerHTML = "";

  // Display recently viewed products (limit to 3)
  recentlyViewed.slice(0, 3).forEach((productId) => {
    const product = products.find((p) => p.id === productId);

    if (product) {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="btn" onclick="addToCart(${product.id}, '${
        product.name
      }', ${product.price}, '${product.image}')">Add to Cart</button>
                    <a href="product-details.html?id=${
                      product.id
                    }" class="btn">Details</a>
                </div>
            `;
      recentlyViewedContainer.appendChild(productCard);
    }
  });
}

// Save product to recently viewed
function saveToRecentlyViewed(productId) {
  let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  // Remove if already exists
  recentlyViewed = recentlyViewed.filter((id) => id !== productId);

  // Add to beginning
  recentlyViewed.unshift(productId);

  // Limit to 10 products
  if (recentlyViewed.length > 10) {
    recentlyViewed = recentlyViewed.slice(0, 10);
  }

  // Save to localStorage
  localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
}
