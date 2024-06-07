let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    if (cartItems && totalPrice) {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - RM${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})" style="background-color: red; border-radius: 5px;color: white;">Remove</button>`;
            cartItems.appendChild(listItem);
            total += item.price;
        });

        totalPrice.textContent = `Total Price: RM${total.toFixed(2)}`;
    }
}

// Initialize cart on cart page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cart-items')) {
        updateCart();
    }
});


    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
