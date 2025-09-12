// Products JavaScript

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Smartphone",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "electronics",
    description:
      "Latest model with high-resolution camera and long battery life.",
    fullDescription:
      "<p>This premium smartphone features a 6.7-inch OLED display, 128GB storage, and a triple camera system with 48MP main sensor. With 5G connectivity and all-day battery life, it's perfect for work and play.</p><p>The device runs on the latest operating system and is powered by a fast octa-core processor. It also includes facial recognition and an in-display fingerprint sensor for security.</p>",
    specifications: {
      Display: "6.7-inch OLED",
      Storage: "128GB",
      Camera: "48MP + 12MP + 12MP",
      Battery: "4500mAh",
      Connectivity: "5G, Wi-Fi 6, Bluetooth 5.2",
    },
    colors: ["#000000", "#ffffff", "#4a6de5", "#ff6b6b"],
    sku: "SMART-001",
    tags: ["smartphone", "electronics", "mobile"],
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "electronics",
    description:
      "Noise-cancelling wireless headphones with premium sound quality.",
    fullDescription:
      "<p>These wireless headphones feature active noise cancellation technology that blocks out ambient noise, allowing you to focus on your music or calls. With 30-hour battery life, they'll last through even the longest days.</p><p>The headphones are equipped with comfortable memory foam ear cushions and a adjustable headband for all-day wear. They also feature touch controls for music and calls, and voice assistant support.</p>",
    specifications: {
      "Battery Life": "30 hours",
      "Noise Cancellation": "Active",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
      Charging: "USB-C",
    },
    colors: ["#000000", "#343a40", "#4a6de5"],
    sku: "AUDIO-002",
    tags: ["headphones", "audio", "wireless"],
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80",
    category: "electronics",
    description:
      "Feature-rich smartwatch with health monitoring and notifications.",
    fullDescription:
      "<p>This smartwatch helps you stay connected and healthy with features like heart rate monitoring, sleep tracking, and workout detection. Receive notifications, make calls, and control your music right from your wrist.</p><p>The always-on retina display is bright and easy to read even in sunlight. With water resistance up to 50 meters, you can wear it while swimming. Battery life lasts up to 18 hours on a single charge.</p>",
    specifications: {
      Display: "1.78-inch OLED",
      "Battery Life": "18 hours",
      "Water Resistance": "50m",
      Compatibility: "iOS & Android",
      Sensors: "Heart rate, GPS, Accelerometer",
    },
    colors: ["#000000", "#ffffff", "#ffd700", "#34c759"],
    sku: "WATCH-003",
    tags: ["watch", "wearable", "fitness"],
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    category: "clothing",
    description: "100% cotton t-shirt available in multiple colors.",
    fullDescription:
      "<p>Made from 100% premium cotton, this t-shirt is soft, comfortable, and durable. The classic fit is suitable for everyday wear and the fabric breathes well to keep you cool.</p><p>This versatile shirt can be dressed up or down and comes in a variety of colors to match any wardrobe. Machine washable for easy care.</p>",
    specifications: {
      Material: "100% Cotton",
      Fit: "Classic",
      Care: "Machine Wash",
      Sizes: "S, M, L, XL",
      Neckline: "Crew Neck",
    },
    colors: ["#000000", "#ffffff", "#4a6de5", "#ff6b6b", "#34c759"],
    sku: "CLOTH-004",
    tags: ["clothing", "t-shirt", "casual"],
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "home",
    description: "Adjustable LED desk lamp with multiple brightness settings.",
    fullDescription:
      "<p>This modern desk lamp features energy-efficient LED technology with adjustable brightness levels to suit any task. The flexible gooseneck design allows you to direct light exactly where you need it.</p><p>With a built-in USB charging port, you can conveniently charge your devices while you work. The touch controls make it easy to adjust brightness, and the memory function remembers your last setting.</p>",
    specifications: {
      "Light Source": "LED",
      "Brightness Levels": "5",
      "Power Source": "AC Adapter",
      "USB Port": "Yes",
      Adjustability: "Flexible Gooseneck",
    },
    colors: ["#000000", "#ffffff", "#6c757d"],
    sku: "HOME-005",
    tags: ["home", "lighting", "desk"],
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "clothing",
    description: "Lightweight running shoes with cushioning and support.",
    fullDescription:
      "<p>Designed for runners, these shoes feature responsive cushioning that absorbs impact and returns energy with every step. The breathable mesh upper keeps your feet cool and comfortable during your run.</p><p>The durable rubber outsole provides traction on various surfaces, and the reflective details enhance visibility in low-light conditions. Available in multiple widths for the perfect fit.</p>",
    specifications: {
      Type: "Running Shoes",
      Cushioning: "Responsive",
      "Upper Material": "Mesh",
      Closure: "Lace-up",
      Sizes: "US 7-13",
    },
    colors: ["#000000", "#ffffff", "#fd7e14", "#4a6de5"],
    sku: "SHOE-006",
    tags: ["footwear", "running", "sports"],
  },
];

// DOM Content Loaded for products
document.addEventListener("DOMContentLoaded", function () {
  // Load products on products page
  if (window.location.pathname.includes("products.html")) {
    loadProducts();
    initProductFilters();
  }

  // Load product details if on product details page
  if (window.location.pathname.includes("product-details.html")) {
    loadProductDetails();
  }
});

// Load products on products page
function loadProducts() {
  const productsGrid = document.getElementById("products-grid");

  if (!productsGrid) return;

  // Clear existing content
  productsGrid.innerHTML = "";

  // Get URL parameters for filtering
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category") || "all";

  // Filter products if needed
  let filteredProducts = products;
  if (category !== "all") {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  // Display products
  filteredProducts.forEach((product) => {
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
    productsGrid.appendChild(productCard);
  });
}

// Initialize product filters
function initProductFilters() {
  const categoryFilter = document.getElementById("category-filter");
  const sortBy = document.getElementById("sort-by");

  if (categoryFilter) {
    // Set initial value based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category") || "all";
    categoryFilter.value = category;

    // Add event listener for category filter
    categoryFilter.addEventListener("change", function () {
      const category = this.value;
      const url = new URL(window.location);

      if (category === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", category);
      }

      window.location.href = url.toString();
    });
  }

  if (sortBy) {
    // Add event listener for sort by
    sortBy.addEventListener("change", function () {
      sortProducts(this.value);
    });
  }
}

// Sort products
function sortProducts(sortBy) {
  const productsGrid = document.getElementById("products-grid");
  const productCards = Array.from(
    productsGrid.getElementsByClassName("product-card")
  );

  productCards.sort((a, b) => {
    const aPrice = parseFloat(
      a.querySelector(".price").textContent.replace("$", "")
    );
    const bPrice = parseFloat(
      b.querySelector(".price").textContent.replace("$", "")
    );
    const aName = a.querySelector("h3").textContent;
    const bName = b.querySelector("h3").textContent;

    switch (sortBy) {
      case "price-low":
        return aPrice - bPrice;
      case "price-high":
        return bPrice - aPrice;
      case "name":
        return aName.localeCompare(bName);
      default:
        return 0;
    }
  });

  // Clear and reappend sorted products
  productsGrid.innerHTML = "";
  productCards.forEach((card) => productsGrid.appendChild(card));
}

// Load product details
function loadProductDetails() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  if (!productId) {
    // Redirect to products page if no ID provided
    window.location.href = "products.html";
    return;
  }

  // Find product
  const product = products.find((p) => p.id === productId);

  if (!product) {
    // Redirect to products page if product not found
    window.location.href = "products.html";
    return;
  }

  // Update page title
  document.title = `ShopEasy - ${product.name}`;

  // Update breadcrumb
  const breadcrumb = document.getElementById("product-name-breadcrumb");
  if (breadcrumb) breadcrumb.textContent = product.name;

  // Update product images
  const mainImage = document.getElementById("main-product-image");
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
  }

  const thumbnailsContainer = document.querySelector(".thumbnail-images");
  if (thumbnailsContainer) {
    // Clear existing thumbnails
    thumbnailsContainer.innerHTML = "";

    // Add main image as first thumbnail
    const mainThumb = document.createElement("img");
    mainThumb.src = product.image;
    mainThumb.alt = `${product.name} thumbnail`;
    mainThumb.classList.add("active");
    mainThumb.addEventListener("click", function () {
      document.getElementById("main-product-image").src = this.src;
      document
        .querySelectorAll(".thumbnail-images img")
        .forEach((img) => img.classList.remove("active"));
      this.classList.add("active");
    });
    thumbnailsContainer.appendChild(mainThumb);

    // Add additional thumbnails (in a real app, these would be different product images)
    for (let i = 0; i < 3; i++) {
      const thumb = document.createElement("img");
      thumb.src = `https://via.placeholder.com/80x80/${
        ["4a6de5", "ff6b6b", "34c759"][i]
      }/ffffff?text=Thumb+${i + 1}`;
      thumb.alt = `${product.name} thumbnail ${i + 1}`;
      thumb.addEventListener("click", function () {
        document.getElementById("main-product-image").src = this.src;
        document
          .querySelectorAll(".thumbnail-images img")
          .forEach((img) => img.classList.remove("active"));
        this.classList.add("active");
      });
      thumbnailsContainer.appendChild(thumb);
    }
  }

  // Update product info
  const productTitle = document.getElementById("product-title");
  if (productTitle) productTitle.textContent = product.name;

  const productPrice = document.getElementById("product-price");
  if (productPrice) productPrice.textContent = `$${product.price.toFixed(2)}`;

  const productDescription = document.getElementById("product-description");
  if (productDescription) productDescription.textContent = product.description;

  const fullDescription = document.getElementById("full-description");
  if (fullDescription) fullDescription.innerHTML = product.fullDescription;

  // Update product meta
  const productSku = document.getElementById("product-sku");
  if (productSku) productSku.textContent = product.sku;

  const productCategory = document.getElementById("product-category");
  if (productCategory)
    productCategory.textContent =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);

  const productTags = document.getElementById("product-tags");
  if (productTags) productTags.textContent = product.tags.join(", ");

  // Update color options
  const colorSelector = document.querySelector(".color-selector");
  if (colorSelector && product.colors) {
    colorSelector.innerHTML = "";
    product.colors.forEach((color) => {
      const colorOption = document.createElement("div");
      colorOption.className = "color-option";
      colorOption.style.backgroundColor = color;
      colorOption.setAttribute("data-color", color);
      colorOption.addEventListener("click", function () {
        document
          .querySelectorAll(".color-option")
          .forEach((opt) => opt.classList.remove("selected"));
        this.classList.add("selected");
      });
      colorSelector.appendChild(colorOption);
    });

    // Select first color by default
    if (colorSelector.firstChild) {
      colorSelector.firstChild.classList.add("selected");
    }
  }

  // Update specifications table
  const specsTable = document.querySelector(".specs-table");
  if (specsTable && product.specifications) {
    specsTable.innerHTML = "";
    for (const [key, value] of Object.entries(product.specifications)) {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${key}</td>
                <td>${value}</td>
            `;
      specsTable.appendChild(row);
    }
  }

  // Set up add to cart button
  const addToCartBtn = document.getElementById("add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const quantity = parseInt(document.getElementById("quantity").value) || 1;
      const colorElement = document.querySelector(".color-option.selected");
      const color = colorElement
        ? colorElement.getAttribute("data-color")
        : null;

      addToCart(
        product.id,
        product.name,
        product.price,
        product.image,
        quantity,
        color
      );
    });
  }

  // Load related products
  loadRelatedProducts(product);
}

// Load related products
function loadRelatedProducts(currentProduct) {
  const relatedContainer = document.getElementById("related-products");

  if (!relatedContainer) return;

  // Clear existing content
  relatedContainer.innerHTML = "";

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 3); // Limit to 3 products

  // Display related products
  relatedProducts.forEach((product) => {
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
    relatedContainer.appendChild(productCard);
  });

  // If no related products, hide the section
  if (relatedProducts.length === 0) {
    relatedContainer.closest(".related-products").style.display = "none";
  }
}
