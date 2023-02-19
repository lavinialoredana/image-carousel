import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const apiKey = "mcaRfShbgJLikAzGohw7Jfni9RvmxG8t1MmWBhiKm1RgSKuFOS2iUNv9";

  // here are my 15 images
  const [imageArray, setImageArray] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const fetchPhotos = async () => {
    const response = await fetch("https://api.pexels.com/v1/curated", {
      headers: {
        Authorization: apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Data failed to be fetched!");
    } else {
      const json = await response.json();
      return json.photos;
    }
  };

  useEffect(() => {
    fetchPhotos()
      .then((photosArray) => {
        setImageArray(photosArray);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleBackwardsClick = () => {
    if (imageIndex === 0) {
      setImageIndex(imageArray.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleForwardClick = () => {
    if (imageIndex === imageArray.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  if (imageArray.length === 0) {
    return <h1> We are trying to get your images</h1>;
  }

  return (
    <div className="app container-fluid">
      <header className="app-header">
        <h1> Project 1: Image Carousel </h1>
      </header>
      <div className="container">
        <div className="grid">
          <div>
            <button onClick={handleBackwardsClick}>Backwards</button>
          </div>
          <div>
            <img
              className="image"
              src={imageArray[imageIndex].src.medium}
              alt="cat"
            ></img>
          </div>
          <div>
            <button onClick={handleForwardClick}>Forward</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
