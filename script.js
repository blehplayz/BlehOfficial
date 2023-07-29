// Dummy product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 25.99,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
  },
];

// Function to display products on the page
function displayProducts() {
  const productContainer = document.querySelector('main');
  productContainer.innerHTML = '';

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <p>Description of ${product.name}.</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="buyProduct('${product.name}')">Buy Now</button>
    `;
    productContainer.appendChild(productDiv);
  });
}

// Function to handle the redirection to payment selection page
function redirectToPayment(productName) {
  const paymentMethod = prompt(
    `Choose a payment method for ${productName}: GCash or PayPal`,
    'GCash'
  ).toLowerCase();

  switch (paymentMethod) {
    case 'gcash':
      // Redirect to GCash payment selection page (replace with actual URL)
      window.location.href = 'https://example.com/gcash-payment-page';
      break;
    case 'paypal':
      // Redirect to PayPal payment selection page (replace with actual URL)
      window.location.href = 'https://example.com/paypal-payment-page';
      break;
    default:
      alert('Invalid payment method. Please choose GCash or PayPal.');
  }
}

// Function to handle the payment based on the selected method
async function buyProduct(productName) {
  const confirmed = confirm(`Do you want to buy ${productName}?`);
  if (confirmed) {
    await redirectToPayment(productName);
  }
}

// Call the displayProducts function to show products on the page
displayProducts();
