// ... (previous code) ...

// Function to show the checkout section
function showCheckout() {
  const checkoutSection = document.getElementById('checkout');
  checkoutSection.classList.add('visible');
}

// Function to hide the checkout section
function hideCheckout() {
  const checkoutSection = document.getElementById('checkout');
  checkoutSection.classList.remove('visible');
}

// Function to show the payment method selection
function redirectToPayment(paymentMethod) {
  if (paymentMethod === 'Cart') {
    showCart();
  } else if (paymentMethod === 'GCash' || paymentMethod === 'PayPal') {
    hideCart();
    showCheckout();
  }
}

// Function to handle the checkout form submission
function handleCheckoutFormSubmission(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  // You can add further processing for the checkout information here
  // For this example, we'll just show the thank you message and clear the cart
  showThankYouMessage();
  clearCart();
  hideCheckout();
}

// Function to show the thank you message
function showThankYouMessage() {
  const thankYouSection = document.getElementById('thank-you');
  thankYouSection.classList.add('visible');
}

// Function to go back to the cart from the checkout section
function goBackToCart() {
  hideCheckout();
  showCart();
}

// Function to clear the cart
function clearCart() {
  cart.length = 0;
  updateCart();
}

// Attach form submission event handler
document.getElementById('checkout-form').addEventListener('submit', handleCheckoutFormSubmission);

// ... (previous code) ...
