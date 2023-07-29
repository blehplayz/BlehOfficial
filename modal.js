// Function to show product details when clicked
function showProductDetails(productName) {
  const product = products.find((p) => p.name === productName);
  if (product) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = ''; // Clear previous content

    const productNameElement = document.createElement('h2');
    productNameElement.textContent = product.name;

    const productImages = document.createElement('div');
    productImages.classList.add('product-images');
    product.images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image;
      productImages.appendChild(img);
    });

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentHeader = document.createElement('h3');
    commentHeader.textContent = 'Comments';

    const commentForm = document.createElement('form');
    commentForm.id = 'comment-form';

    const commentNameInput = document.createElement('input');
    commentNameInput.type = 'text';
    commentNameInput.id = 'comment-name';
    commentNameInput.placeholder = 'Your Name';
    commentNameInput.required = true;

    const commentTextInput = document.createElement('textarea');
    commentTextInput.id = 'comment-text';
    commentTextInput.placeholder = 'Leave a comment...';
    commentTextInput.required = true;

    const postCommentButton = document.createElement('button');
    postCommentButton.type = 'submit';
    postCommentButton.textContent = 'Post Comment';

    const commentList = document.createElement('div');
    commentList.id = 'comments';

    commentForm.onsubmit = function (e) {
      e.preventDefault();
      const name = document.getElementById('comment-name').value;
      const text = document.getElementById('comment-text').value;
      if (name.trim() !== '' && text.trim() !== '') {
        product.comments.push({ name, text });
        showProductDetails(product.name);
      }
    };

    product.comments.forEach((comment) => {
      const commentDiv = document.createElement('div');
      commentDiv.innerHTML = `<strong>${comment.name}</strong>: ${comment.text}`;
      commentList.appendChild(commentDiv);
    });

    commentSection.appendChild(commentHeader);
    commentForm.appendChild(commentNameInput);
    commentForm.appendChild(commentTextInput);
    commentForm.appendChild(postCommentButton);
    commentSection.appendChild(commentForm);
    commentSection.appendChild(commentList);

    modalContent.appendChild(productNameElement);
    modalContent.appendChild(productImages);
    modalContent.appendChild(productDescription);
    modalContent.appendChild(commentSection);

    showModal();
  }
}

// Function to show the modal
function showModal() {
  const modal = document.getElementById('product-details-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Function to close product details modal
function closeProductDetails() {
  const modal = document.getElementById('product-details-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
      }
    
