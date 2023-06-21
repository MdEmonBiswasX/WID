function extractImages() {
  const websiteLink = document.getElementById('website-link').value;

  // Display status message
  setStatusMessage(`Extracting images from ${websiteLink}...`);

  // Simulating a delay to show the status message
  setTimeout(() => {
    // Simulated response from the server with image URLs
    const imageUrls = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    // Display status message
    setStatusMessage(`Images extracted from ${websiteLink}.`);

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
  setStatusMessage(`${imageUrls.length} images displayed.`);
}

function toggleImageSelection(image) {
  image.classList.toggle('selected');
}

function downloadImages() {
  const selectedImages = document.getElementsByClassName('selected');

  if (selectedImages.length === 0) {
    // Display status message
    setStatusMessage('No images selected for download.');
    return;
  }

  // Display status message
  setStatusMessage(`Downloading ${selectedImages.length} selected image(s).`);

  for (let i = 0; i < selectedImages.length; i++) {
    const imageUrl = selectedImages[i].src;
    const fileName = `image_${i + 1}.jpg`;

    // Create a link element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.target = '_blank';
    link.style.display = 'none';

    // Add the link to the document body
    document.body.appendChild(link);

    // Click the link element to trigger the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  }

  // Display status message
  setStatusMessage('Image download completed.');
}

function setStatusMessage(message) {
  const statusBox = document.getElementById('status-box');
  statusBox.textContent = message;
}
