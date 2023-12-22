import { useState } from "react";
// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import "./Carousel.css";

export const Carousel = ({ data }) => {
    // console.log(data)
    const [slide, setSlide] = useState(0)

    return (
        <div className="carousel">
            {/* <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevoiusSlide} /> */}
            {data.map((item, idx) => (
                <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
            ))}
            {/* <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} /> */}
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button 
                        key={idx} 
                        onClick={() => setSlide(idx)} //allows dots to be cycled
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    );
};


