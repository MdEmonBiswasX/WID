function extractImages() {
  const websiteLinkInput = document.getElementById('website-link');
  const websiteLink = websiteLinkInput.value.trim();

  if (!websiteLink) {
    setStatusMessage('Please enter a valid website link.', 'error');
    return;
  }

  // Display status message
  setStatusMessage(`Extracting images from ${websiteLink}...`);

  // Simulating a delay to show the status message
  setTimeout(() => {
    // Simulated response from the server with image URLs
    const imageUrls = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    // Display status message
    setStatusMessage(`Images extracted from ${websiteLink}.`, 'success');

    displayImages(imageUrls);
  }, 2000);
}

function displayImages(imageUrls) {
  const imagePreview = document.getElementById('image-preview');
  imagePreview.innerHTML = '';

  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i];

    const img = document.createElement('img');
    img.src = imageUrl;
    img.addEventListener('click', function() {
      toggleImageSelection(this);
    });

    imagePreview.appendChild(img);
  }

  // Display status message
  setStatusMessage(`${imageUrls.length} images displayed.
