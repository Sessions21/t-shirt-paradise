import React from "react";
import { useState } from "react";
import TshirtList from "../components/TshirtList";
import coverImage from "../assets/images/cover-3.png";

const Gallery = () => {

  return (
    <div className="gallery-container">
      <img className="background" src={coverImage} alt="paradise scene"></img>
      <h1 className="gallery title">T-Shirt Paradise User Submitted Gallery</h1>
      <div className="tshirt-container">
        <TshirtList>
        </TshirtList>
      </div>
    </div>
  );
};
export default Gallery;
