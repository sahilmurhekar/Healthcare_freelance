import React, { useState, useEffect } from 'react';

// Import images
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

const Carousel = () => {
  const images = [pic1, pic2, pic3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5 second delay

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] max-w-[620px] max-h-[360px] rounded-xl overflow-hidden mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
