// Dummy product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price:120.00,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 170.00,
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
  return new Promise((resolve, reject) => {
    // Simulate payment process
    setTimeout(() => {
      const success = Math.random() < 0.9; // 90% success rate
      if (success) {
        resolve(`Payment for Product ${productID} successful via GCash!`);
      } else {
        reject(new Error(`Payment for Product ${productID} failed via GCash.`));
      }
    }, 2000);
  });
}

// Function to simulate PayPal payment
function payWithPayPal(productID) {
  return new Promise((resolve, reject) => {
    // Simulate payment process
    setTimeout(() => {
      const success = Math.random() < 0.95; // 95% success rate
      if (success) {
        resolve(`Payment for Product ${productID} successful via PayPal!`);
      } else {
        reject(new Error(`Payment for Product ${productID} failed via PayPal.`));
      }
    }, 2000);
  });
}

// Function to handle the payment based on the selected method
async function buyProduct(productID) {
  const paymentMethod = prompt(
    'Choose a payment method: GCash or PayPal',
    'GCash'
  ).toLowerCase();

  try {
    switch (paymentMethod) {
      case 'gcash':
        const gcashMessage = await payWithGCash(productID);
        alert(gcashMessage);
        break;
      case 'paypal':
        const paypalMessage = await payWithPayPal(productID);
        alert(paypalMessage);
        break;
      default:
        throw new Error('Invalid payment method. Please choose GCash or PayPal.');
    }
  } catch (error) {
    alert(error.message);
  }
}

// Call the displayProducts function to show products on the page
displayProducts();
