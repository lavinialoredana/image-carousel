import React from "react";

const ImageCarousel = ({
  onHandleBackwardsClick,
  currentImage,
  onHandleForwardClick,
}) => {
  return (
    <div className="container">
      <div className="grid">
        <div>
          <button onClick={onHandleBackwardsClick}>Backwards</button>
        </div>
        <div>
          <img className="image" src={currentImage} alt="cat"></img>
        </div>
        <div>
          <button onClick={onHandleForwardClick}>Forward</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
