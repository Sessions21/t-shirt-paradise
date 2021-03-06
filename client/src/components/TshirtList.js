import React, { useState } from "react";
import Modal from "./Modal";
// For api calls
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALLTSHIRTS } from "../utils/queries";

const TshirtList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTshirt, setCurrentTshirt] = useState();

  // Fetch Data From Databasae
  const { loading, error, data } = useQuery(QUERY_ALLTSHIRTS);

  if (error) {
    console.log(error);
  }

  const tshirtData = data?.tshirts || [];
  console.log(tshirtData);

  if (loading) {
    return <div>Loading...</div>;
  }
  // End fetch

  // const currentTshirts = Tshirts.filter(
  //   (tshirt) => tshirt.category === category
  // );

  const toggleModal = (title, i) => {
    setCurrentTshirt({ ...title, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentTshirt={currentTshirt} />
      )}
      <div className="flex-row">
        {tshirtData.map(
          ({ title, username, imageLink, description, comments }, i) => {
            return (
              <div key={i}>
                <h2>
                  {title}
                  <p className="shirt-user"><span>By</span> {username}</p>
                </h2>
                <p className="shirt-description">{description}</p>
                <img className="tshirt-image" src={imageLink} alt='tshirt' />
                <p>{comments.commentBody}</p>
                <button
                  onClick={() => {
                    toggleModal(title);
                  }}
                  className="addComment"
                >
                  Comment
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TshirtList;
