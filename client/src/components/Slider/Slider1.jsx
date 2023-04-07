import React, { useState, useEffect } from 'react';
import './Slider1.scss';

const slides = [
  {
    id: 1,
    image: "/img/Fitness.png",
    caption: 'Tu diseño sin Límites'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2654902/pexels-photo-2654902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Tu diseño sin Límites'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/34495/runner-race-competition-female.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Tu diseño sin Límites'
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="caption">{slide.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
