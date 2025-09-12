// Main JavaScript for the e-commerce template

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize cart count
  updateCartCount();

  // Initialize product tabs
  initProductTabs();

  // Initialize FAQ toggles
  initFAQToggle();

  // Initialize contact form
  initContactForm();
});

// Update cart count from localStorage
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = totalItems;
  });
}

// Initialize product tabs
function initProductTabs() {
  const tabLinks = document.querySelectorAll(".tab-link");

  if (tabLinks.length > 0) {
    tabLinks.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");

        // Remove active class from all tabs and panes
        document
          .querySelectorAll(".tab-link")
          .forEach((t) => t.classList.remove("active"));
        document
          .querySelectorAll(".tab-pane")
          .forEach((p) => p.classList.remove("active"));

        // Add active class to current tab and pane
        this.classList.add("active");
        document.getElementById(tabName).classList.add("active");
      });
    });
  }
}

// Initialize FAQ toggle
function initFAQToggle() {
  const faqToggles = document.querySelectorAll(".faq-toggle");

  if (faqToggles.length > 0) {
    faqToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const faqItem = this.parentElement.parentElement;
        const answer = faqItem.querySelector(".faq-answer");

        answer.classList.toggle("active");
        this.textContent = answer.classList.contains("active") ? "-" : "+";
      });
    });
  }
}

// Initialize contact form
function initContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple form validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // In a real application, you would send the form data to a server here
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
}

// Add to cart function
function addToCart(
  productId,
  productName,
  productPrice,
  productImage,
  quantity = 1,
  color = null
) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists in cart
  const existingItemIndex = cart.findIndex(
    (item) => item.id === productId && item.color === color
  );

  if (existingItemIndex !== -1) {
    // Update quantity if product exists
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new item to cart
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: quantity,
      color: color,
    });
  }

  // Save cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart count
  updateCartCount();

  // Show confirmation message
  alert(`${productName} has been added to your cart!`);
}

// Remove from cart function
function removeFromCart(productId, color = null) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Filter out the item to remove
  cart = cart.filter(
    (item) => !(item.id === productId && item.color === color)
  );

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart count
  updateCartCount();

  // Reload cart page if we're on it
  if (window.location.pathname.includes("cart.html")) {
    window.location.reload();
  }
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity, color = null) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the item and update its quantity
  const itemIndex = cart.findIndex(
    (item) => item.id === productId && item.color === color
  );

  if (itemIndex !== -1) {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      cart.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart[itemIndex].quantity = newQuantity;
    }
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart count
  updateCartCount();

  // Reload cart page if we're on it
  if (window.location.pathname.includes("cart.html")) {
    window.location.reload();
  }
}
