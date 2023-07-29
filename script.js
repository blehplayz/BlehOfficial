// Function to handle product purchase
function buyProduct(productName) {
  const product = products.find((p) => p.name === productName);
  if (product) {
    // Display the payment method selection
    document.getElementById('payment-selection').classList.remove('hidden');
  }
}

// Function to handle redirecting to payment method or cart
function redirectToPayment(paymentMethod) {
  if (paymentMethod === 'Cart') {
    // Show cart
    showCart();
  } else {
    // Process payment (placeholder)
    const thankYouSection = document.getElementById('thank-you');
    thankYouSection.classList.remove('hidden');
    hideCart();
  }
}

// Function to go back to product selection
function goBackToProducts() {
  document.getElementById('payment-selection').classList.add('hidden');
  document.getElementById('thank-you').classList.add('hidden');
  hideCart();
}

// Initialize product rendering
renderProducts();
