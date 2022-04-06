import React, { useState } from "react";
import Modal from "./Modal";
// For api calls
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALLTSHIRTS } from "../utils/queries";

const TshirtList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTshirt, setCurrentTshirt] = useState();

  const [Tshirts] = useState([]);

  // Fetch Data From Databasae
  const { loading, error, data } = useQuery(QUERY_ALLTSHIRTS);

  if (error) {
    console.log(error);
  }

  console.log({ loading: loading, data: data, error:error});

  const tshirtData = data?.tshirts || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  // End fetch

  const currentTshirts = Tshirts.filter(
    (tshirt) => tshirt.category === category
  );

  const toggleModal = () => {
    setCurrentTshirt({});
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentTshirt={currentTshirt} />
      )}
      <div className="flex-row">
        {tshirtData.map(
          ({ title, username, imageLink, description, comments }) => (
            <div>
              <h2>
                {title} By {username}
              </h2>
              <span>{imageLink}</span>
              <span>{description}</span>
              <span>{comments}</span>
              <button
                className="addComment"
                onClick={() => {
                  toggleModal();
                }}
              >
                Comment
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TshirtList;
