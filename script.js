let cartItems = 0;

function addToCart() {
    cartItems++;
    document.getElementById('cart-count').textContent = cartItems;
    alert("Item added to cart!");
}
