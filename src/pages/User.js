import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TSHIRTSBYUSER } from "../utils/queries";
import { DELETE_TSHIRT } from "../utils/mutations";
import coverImage from "../assets/images/cover-3.png";

const User = () => {
  const [deleteTshirt] = useMutation(DELETE_TSHIRT);
  const { loading, data } = useQuery(QUERY_TSHIRTSBYUSER);
  const userTShirts = data?.userTShirts || {};

  if (loading) {
    return <div>Loading...</div>;
  }


  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const { data } = await deleteTshirt({
        variables: { _id: _id }
      });
      console.log(data);
      window.location.replace('/user');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div className="main-area">
        <img className="background" src={coverImage} alt="paradise scene"></img>
        <div className="user-container">
          <h1>Your Tshirts</h1>
          {userTShirts.map(({ _id, title, brand, description, imageLink }, i) => {
            return (
              <div key={i}>
                <h3>{title}</h3>
                <p>{brand}</p>
                <p>{description}</p>
                <img src={imageLink} alt='tshirt' />
                <div className="button-wrapper">
                  <button onClick={() => window.location.replace(`/edit/${_id}`)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete({ _id })}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
