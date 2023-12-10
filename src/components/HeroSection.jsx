import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>GET THE OPTIMIZED POWER </h1>
      <br>
      </br>
      <br>
      </br>
      <p>Enter the location below</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         UPLOAD IMG
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
