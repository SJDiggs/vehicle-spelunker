
import { useState, useEffect } from 'react'
import './SlideShow.css'

const sliderImages = ['slider1.png', 'slider2.png', 'slider3.png'];
const slideDelay = 8500;

function SlideShow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        ),
      slideDelay
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliderImages.map((imagePath, idx) => (
          <div 
          className="slide" 
          key={idx}>
            <img src={imagePath} alt={`Slide ${idx + 1}`} id="slide-image" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {sliderImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  )
}


export default SlideShow;


