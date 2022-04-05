import React from "react";
import { useState } from "react";
import TshirtList from "../components/TshirtList";

const Gallery = () => {
  // const trialUsers = fakeData;
  const [Tshirt, setTshirt] = useState([TshirtList]);

  return (
    <div className="Gallery container">
      <h1 className="gallery title">
        T-Shirt Paradise User Submitted Gallery
      </h1>
      <div className="tshirt-container">
        {Tshirt.map(<TshirtList></TshirtList>)}
      </div>
    </div>
  );
};
export default Gallery;
