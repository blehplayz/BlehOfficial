// ... (previous JavaScript code) ...

// Function to show product details when clicked
function showProductDetails(productName) {
  const product = products.find((p) => p.name === productName);
  if (product) {
    const modal = document.getElementById('product-details-modal');
    const modalContent = document.querySelector('.modal-content');
    const productImages = document.getElementById('product-images');
    const productDetailsName = document.getElementById('product-details-name');
    const productDetailsDescription = document.getElementById('product-details-description');
    const commentSection = document.getElementById('comments');
    const commentForm = document.getElementById('comment-form');

    // Clear previous content
    productImages.innerHTML = '';
    commentSection.innerHTML = '';

    // Populate modal with product details and images
    productDetailsName.textContent = product.name;
    productDetailsDescription.textContent = product.description;
    product.images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image;
      productImages.appendChild(img);
    });

    // Populate comments
    if (product.comments.length > 0) {
      product.comments.forEach((comment) => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `<strong>${comment.name}</strong>: ${comment.text}`;
        commentSection.appendChild(commentDiv);
      });
    } else {
      const noCommentsDiv = document.createElement('div');
      noCommentsDiv.textContent = 'No comments yet.';
      commentSection.appendChild(noCommentsDiv);
    }

    // Show modal
    modal.classList.remove('hidden');
    modalContent.classList.add('fade-in');
    document.body.style.overflow = 'hidden';

    // Handle comment submission
    commentForm.onsubmit = function (e) {
      e.preventDefault();
      const name = document.getElementById('comment-name').value;
      const text = document.getElementById('comment-text').value;
      if (name.trim() !== '' && text.trim() !== '') {
        product.comments.push({ name, text });
        showProductDetails(product.name);
      }
    };
  }
}

// Function to close product details modal
function closeProductDetails() {
  const modal = document.getElementById('product-details-modal');
  const modalContent = document.querySelector('.modal-content');
  modalContent.classList.remove('fade-in');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// ... (remaining JavaScript code) ...
