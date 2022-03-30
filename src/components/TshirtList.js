import React, { useState } from 'react';
import Modal from './Modal';

const TshirtList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTshirt, setCurrentTshirt] = useState();

  const [Tshirts] = useState([

    
  ]);

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
      <div className="flex-row">
        {currentTshirts.map((image, i) => (
          <img
            src={require(`../assets/images/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default TshirtList;