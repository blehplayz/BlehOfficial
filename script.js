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
  const productContainer = document.querySelector('#products');
  productContainer.innerHTML = '';

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="buyProduct(${product.id})">Buy Now</button>
    `;
    productContainer.appendChild(productDiv);
  });
}

// Function to simulate GCash payment
function payWithGCash(productID) {
  // Simulate payment process
  setTimeout(() => {
    alert(`Payment for Product ${productID} successful via GCash!`);
  }, 2000);
}

// Function to simulate PayPal payment
function payWithPayPal(productID) {
  // Simulate payment process
  setTimeout(() => {
    alert(`Payment for Product ${productID} successful via PayPal!`);
  }, 2000);
}

// Function to handle the payment based on the selected method
function buyProduct(productID) {
  const paymentMethod = prompt(
    'Choose a payment method: GCash or PayPal',
    'GCash'
  ).toLowerCase();

  switch (paymentMethod) {
    case 'gcash':
      payWithGCash(productID);
      break;
    case 'paypal':
      payWithPayPal(productID);
      break;
    default:
      alert('Invalid payment method. Please choose GCash or PayPal.');
  }
}

// Call the displayProducts function to show products on the page
displayProducts();
                   
