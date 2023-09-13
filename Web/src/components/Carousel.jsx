import React, { useState, useEffect } from 'react'
import '../styles/carousel.css'

const Carrousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
    'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2022/05/el-padrino-el-clasico-de-los-clasicos-759x500.jpg',
    'https://i.blogs.es/d7955b/poster-20gran-20gatsby/450_1000.jpg',
    'https://i.ytimg.com/vi/xk_F_WAPhv4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJHzGnVV83niW8cBaNzv5mpePO3w',
    ];

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    useEffect(() => {
      const intervalId = setInterval(nextSlide, 5000);
      return () => clearInterval(intervalId);
    }, []);

  return (
    <section className="carousel">
        <i className="bi bi-arrow-left-circle-fill carousel-button btn-prev" onClick={prevSlide}></i>
        <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="carousel-image"
        />
        <i className="bi bi-arrow-right-circle-fill carousel-button btn-next" onClick={nextSlide}></i>
    </section>
  )
}

export default Carrousel