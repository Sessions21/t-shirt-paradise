import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers';
import contactImage from "../assets/images/cover-3.png"

const Contact = () => {
  const [formState, setFormState ] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };


  return (
    <div>
      <img className="background" src={contactImage} alt="paradise scene"></img>
      <section className='contact'>
        <form id="contact-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact Us</legend>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} />

              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} />

              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit" className='contactSubmit'>Submit</button>
          </fieldset>
        </form>
      </section>
    </div>
    
  );
}

export default Contact