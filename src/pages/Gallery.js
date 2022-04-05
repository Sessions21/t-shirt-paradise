import React from "react";
import fakeData from '../fakeData';
import { useState } from 'react';
import TshirtList from "../components/TshirtList";
import { QUERY_ALLTSHIRTS } from "../utils/queries";

const Gallery = () => {

  // const trialUsers = fakeData;
  const [Tshirt, setTshirt] = useState([]);
  return (
    <div className="Gallery container">
      <h1 className="gallery title"> T-Shirt Paradise User Submitted Gallery </h1>

      <TshirtList />
    </div>
  );
};
export default Gallery;
