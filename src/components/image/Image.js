import React, { useState } from "react";
import { Cursor } from "../cursor/Cursor";

export const Image = () => {
  const [currentImageURL, setcurrentImageURL] = useState("./assets/1-mysterious-warriors.png");
  const imagesUrl = [
    "./assets/1-mysterious-warriors.png",
    "./assets/2-elephant-pink.png",
    "./assets/3-icescream.png",
    "./assets/4-fox.png",
  ];
  return (
    <div className="gallery">
      <div className="image-container" id="imagecontainer">
      <img
        src={currentImageURL || imagesUrl[0]}
        id="imagetozoom"
        className="image-to-zoom"
        alt="image"
      />
      </div>
      <ul className="items">
        <h2 className="sub-title">Click me for change pics</h2>
        {imagesUrl.map((url) => {
          return (
            <li key={url} className="item">
              <button className="button">
                <img
                  src={url}
                  className="thumbs"
                  alt="thumbs"
                  onClick={() => setcurrentImageURL(url)}
                />
              </button>
            </li>
          );
        })}
      </ul>   
      <Cursor url={currentImageURL} />
    </div>
  );
};
