// Cart functionality
let cart = [];

function addToCart(productId) {
    // In real app, you would fetch product details
    const product = {
        id: productId,
        name: "Men's Formal Shirt",
        price: 699,
        quantity: 1
    };
    
    cart.push(product);
    updateCartCount();
    showAlert("Added to cart!");
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    renderCartItems();
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

function renderCartItems() {
    const cartItemsEl = document.getElementById('cartItems');
    cartItemsEl.innerHTML = '';
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="d-flex justify-content-between">
                <h6>${item.name}</h6>
                <span>₹${item.price}</span>
            </div>
        `;
        cartItemsEl.appendChild(itemEl);
    });
}

function checkout() {
    window.location.href = "checkout.html";
}

function showAlert(message) {
    // Create a nice toast notification
    const alert = document.createElement('div');
    alert.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 2000);
}
