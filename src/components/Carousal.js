import React, { useState ,useEffect} from 'react';
import '../styles/styles.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'images/back1.png',
    'images/back2.png',
    'images/back3.png',
    // Add more images as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1500); // Change slide every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">
        <img className='button-image' src="images/prevbutton.png" alt="prevbutton"/>
        </button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button onClick={nextSlide} className="carousel-button next">
        <img className='button-image' src="images/Nextbutton.png" alt="Nextbutton"/>
        </button>
    </div>
  );
};

const App1 = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-header"><b>Get crest and get...</b></h2>
      <div className="carousel-wrapper">
        <Carousel className="carousel" />
      </div>
    </div>
  );
};

export default App1;


    
 


