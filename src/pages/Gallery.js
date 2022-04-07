import React from "react";
import { useState } from "react";
import TshirtList from "../components/TshirtList";
import coverImage from "../assets/images/cover-3.png";

const Gallery = () => {

  return (
    <div className="main-area">
      <img className="background" src={coverImage} alt="paradise scene"></img>
      <div className="gallery-container">
        <h1 className="gallery title">T-Shirt Paradise User Submitted Gallery</h1>
        <div className="tshirt-container">
          <TshirtList>
          </TshirtList>
        </div>
      </div>
      <div className='space-for-footer'></div>
    </div>
  );
};
export default Gallery;
