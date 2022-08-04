import React, { useState } from "react";

const ImageSlider = ({ slides, img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider">
      <div className="slider__arrow slider__arrow--left" onClick={goToPrevious}>
        <img src="./img/skills/left.svg" alt="Right" className="slider__icon" />
      </div>

      <div className="slider__arrow slider__arrow--right" onClick={goToNext}>
        <img
          src="./img/skills/right.svg"
          alt="Right"
          className="slider__icon"
        />
      </div>

      <div className="slider__slides">
        <img src={slides[currentIndex]} alt="" />
      </div>
    </div>
  );
};

export default ImageSlider;
