// Cart data
const cart = [];

// Function to add a product to the cart
function addToCart(productName) {
  const product = products.find((p) => p.name === productName);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

// Function to update the cart in the DOM
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cart.forEach((product) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.textContent = product.name;
    cartItemsElement.appendChild(cartItem);
  });

  const cartTotalElement = document.getElementById('cart-total');
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);
  cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;

  showCart();
}

// Function to show the cart
function showCart() {
  const cartElement = document.getElementById('cart');
  cartElement.classList.add('visible');
}

// Function to hide the cart
function hideCart() {
  const cartElement = document.getElementById('cart');
  cartElement.classList.remove('visible');
}
