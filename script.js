<!DOCTYPE html>
<html>
<head>
  <title>Website Image Extractor</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.5.0/css/bootstrap.min.css">
  <style>
    .image-preview {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
    
    .image-preview img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      cursor: pointer;
    }
    
    .selected {
      border: 3px solid blue;
    }

    .status-message {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="mt-5">Website Image Extractor</h1>
  
    <div class="row mt-4">
      <div class="col-md-6">
        <label for="website-link" class="form-label">Website Link:</label>
        <input type="url" id="website-link" class="form-control" placeholder="Paste website link here" required>
      </div>
      <div class="col-md-6">
        <button onclick="extractImages()" class="btn btn-primary">Extract Images</button>
      </div>
    </div>
  
    <h2 class="mt-5">Preview:</h2>
    <div id="image-preview" class="image-preview"></div>
  
    <div class="row mt-4">
      <div class="col-md-6">
        <button onclick="downloadImages()" class="btn btn-success">Download Selected Images</button>
      </div>
      <div class="col-md-6">
        <button onclick="selectAllImages()" class="btn btn-secondary me-2">Select All</button>
        <button onclick="deselectAllImages()" class="btn btn-secondary">Deselect All</button>
      </div>
    </div>

    <div id="status-box" class="status-message"></div>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
