import React, { useState, useRef } from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Services() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Function to open the file input when the button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Display the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div>
        {/* Left side content */}
        {selectedImage && (
          <div>
            <h2>Selected Image:</h2>
            <img src={selectedImage} alt="Uploaded" width="100%" />
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        {/* Right side content */}
        <h1>Upload and Display Image</h1>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
        <button
          className='btns btn--primary btn--large' 
          onClick={handleButtonClick}
        >
          UPLOAD IMG
        </button>
      </div>
      <div>
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default Services;
