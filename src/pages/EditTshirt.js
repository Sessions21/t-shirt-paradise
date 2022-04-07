import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TSHIRT } from '../utils/queries';
import { EDIT_TSHIRT } from '../utils/mutations';

function EditTshirt() {

  const tshirtID = window.location.toString().split('/').pop();

  const [formState, setFormState] = useState({});

  const { loading, data } = useQuery(QUERY_TSHIRT,
    { variables: { id: tshirtID } }
  );

  const [editTShirt] = useMutation(EDIT_TSHIRT);

  if (loading) {
    return <div>Loading...</div>
  }

  const tshirt = data.tshirt;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    console.log(formState);
    event.preventDefault();
    try {
      const { data } = await editTShirt({
        variables: { ...formState, _id: tshirtID }
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>EditTshirt</div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' defaultValue={tshirt.title} onBlur={handleChange}></input>
        <label htmlFor='brand'>Brand</label>
        <input type='text' name='brand' defaultValue={tshirt.brand} onBlur={handleChange}></input>
        <label htmlFor='description'>Description</label>
        <textarea type='text' name='description' defaultValue={tshirt.description} onBlur={handleChange}></textarea>
        <label htmlFor='image-link'>Image Link</label>
        <input type='text' name='imageLink' defaultValue={tshirt.imageLink} onBlur={handleChange}></input>
        {formState.imageLink ? (
          <img src={formState.imageLink} alt='tshirt' />
        ) : (null)}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default EditTshirt;