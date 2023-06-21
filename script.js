function extractImages() {
    const websiteLink = document.getElementById('website-link').value;
    
    // Send the websiteLink to the server using an AJAX request or fetch API
    
    // Upon receiving the response from the server, update the imageUrls array and call the displayImages() function
    // For example:
    const imageUrls = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    displayImages(imageUrls);
  }
  
  function displayImages(imageUrls) {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.innerHTML = '';
    
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      
      const img = document.createElement('img');
      img.src = imageUrl;
      img.onclick = function() {
        toggleImageSelection(this);
      };
      
      imagePreview.appendChild(img);
    }
  }
  
  function toggleImageSelection(image) {
    image.classList.toggle('selected');
  }
  // Comment
  function downloadImages() {
    const selectedImages = document.getElementsByClassName('selected');
  
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
  }
  