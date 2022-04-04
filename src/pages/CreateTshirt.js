import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TSHIRT } from '../utils/mutations';

function CreateTshirt() {
  const [addTshirt, { error }] = useMutation(ADD_TSHIRT);

  const [formState, setFormState] = useState({
    title: '',
    brand: '',
    description: '',

  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addTshirt({
        variables: { ...formState }
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>CreateTshirt</div>
      <form className='createTshirtForm' onSubmit={handleFormSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          defaultValue={formState.title}
          onBlur={handleChange}>
        </input>

        <label htmlFor='brand'>Brand</label>
        <input
          type='test'
          name='brand'
          defaultValue={formState.brand}
          onBlur={handleChange}></input>

        <label htmlFor='description'>Description</label>
        <textarea
          type='text'
          name='description'
          defaultValue={formState.description}
          onBlur={handleChange}>
        </textarea>

        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default CreateTshirt