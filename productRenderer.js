// Function to render a single product section
function renderProduct(product) {
  const productSection = document.createElement('section');
  productSection.classList.add('product');
  productSection.onclick = () => showProductDetails(product.name);

  const productName = document.createElement('h2');
  productName.textContent = product.name;

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;

  const productPrice = document.createElement('p');
  productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'Add to Cart';
  buyButton.onclick = () => addToCart(product.name);

  productSection.appendChild(productName);
  productSection.appendChild(productDescription);
  productSection.appendChild(productPrice);
  productSection.appendChild(buyButton);

  return productSection;
}

// Function to render all products
function renderProducts() {
  const main = document.querySelector('main');
  products.forEach((product) => {
    const productSection = renderProduct(product);
    main.appendChild(productSection);
  });
}
