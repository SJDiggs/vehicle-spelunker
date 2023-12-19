// import {useState, useEffect} from 'react' 
// import './SlideShow.css'

// // const testColors = ["#0088FE", "#00C49F", "#FFBB28"];
// const sliderImages = ['../images/slider1.png', '../images/slider2.png', '../images/slider3.png']
// const slideDelay = 3000

// function SlideShow () {
//     const [index, setIndex] = useState(0)

//     useEffect(() => {
//         setTimeout(
//           () =>
//             setIndex((prevIndex) =>
//               prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
//             ),
//           slideDelay
//         );
    
//         return () => {};
//       }, [index]);
//     // Move the position of slideshowSlider by 0% when index is 0, -100% when index is 1 and by -200% when index is 2
//     return (
//         <div className="slideshow">
//           <div className="slideshowSlider"
//             style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//           >
//             {sliderImages.map((backgroundColor, index) => (
//               <div
//                 className="slide"
//                 key={index}
//                 style={{ backgroundColor }}
//               ></div>
//             ))}
//           </div>
    
//           <div className="slideshowDots">
//         {sliderImages.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//           ></div>
//             ))}
//           </div>
//         </div>
//       );
// }

import React, { useState, useEffect } from 'react'
import './SlideShow.css'

const sliderImages = ['slider1.png', 'slider2.png', 'slider3.png'];
const slideDelay = 7500;

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
            <img src={imagePath} alt={`Slide ${idx + 1}`} />
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
  );
}


export default SlideShow;


