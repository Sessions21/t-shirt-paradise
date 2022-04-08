import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TSHIRT } from '../utils/queries';
import { EDIT_TSHIRT } from '../utils/mutations';
import createImage from "../assets/images/cover-4.png";

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
      window.location.replace('/user');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className='create'>
        <img className="background" src={createImage} alt="paradise scene"></img>
        <div className='createContainer'>
          <form className='createTshirtForm' onSubmit={handleFormSubmit}>
            <fieldset className='fieldSetCreate'>
              <legend className='SignupLegend'>EditTshirt</legend>
              <label htmlFor='title'>Title</label>
              <input type='text' name='title' defaultValue={tshirt.title} onBlur={handleChange}></input>
              <label htmlFor='brand'>Brand</label>
              <input type='text' name='brand' defaultValue={tshirt.brand} onBlur={handleChange}></input>
              <label htmlFor='description'>Description</label>
              <textarea type='text' name='description' defaultValue={tshirt.description} onBlur={handleChange}></textarea>
              <label htmlFor='image-link'>Image Link</label>
              <input type='text' name='imageLink' defaultValue={tshirt.imageLink} onBlur={handleChange}></input>
              <div>
                {formState.imageLink ? (
                  <img src={formState.imageLink} alt='tshirt' />
                ) : (null)}
              </div>
              <button className='createSubmit' type='submit'>Submit</button>
            </fieldset>
          </form>
          <div className='space-for-footer'></div>
        </div>
      </main>
    </>
  )
}

export default EditTshirt;