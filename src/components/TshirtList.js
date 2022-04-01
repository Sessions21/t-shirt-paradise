import React, { useState } from 'react';
import Modal from './Modal';
// For api calls
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALLTSHIRTS } from '../utils/queries';

const TshirtList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTshirt, setCurrentTshirt] = useState();

  const [Tshirts] = useState([

  ]);

  // Fetch Data From Databasae
  const { loading, error, data } = useQuery(QUERY_ALLTSHIRTS);

  if (error) {
    console.log(error);
  }

  console.log({ loading: loading, data: data });

  const tshirtData = data?.tshirts || {};

  if (loading) {
    return <div>Loading...</div>
  }
  // End fetch 

  const currentTshirts = Tshirts.filter(tshirt => tshirt.category === category);

  const toggleModal = (image, i) => {
    setCurrentTshirt({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentTshirt={currentTshirt} />
      )}
      {/* <div className="flex-row">
        {currentTshirts.map((image, i) => (
          <img
            src={require(`../assets/images/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div> */}
    </div>
  );
};

export default TshirtList;