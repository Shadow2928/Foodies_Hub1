let cart = [];

function addToCart(id, name, price) {
    const item = { id, name, price, quantity: 1 };
    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(item);
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        cartItems.appendChild(listItem);
    });

    totalPrice.innerText = total.toFixed(2);
}

function checkout() {
    alert('Checkout successful!');
    cart = [];
    updateCart();
}

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}
