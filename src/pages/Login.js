import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import loginImage from "../assets/images/cover-1.png"
import Signup from "./Signup"

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='login flex-row '>
      <img className="background" src={loginImage} alt="paradise scene"></img>
      <div className='loginContainer'>
        <form className='formLogin' onSubmit={handleFormSubmit}>
          <fieldset className='fieldSetLogin'>
            <legend className='loginLegend'>Login</legend>
            <input
              className='form-input'
              placeholder='Your email'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className='form-input'
              placeholder='password'
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
            <button className='loginSubmit' type='submit'>Submit</button>
            <p className='break'> Not A Member Yet? Go Register. </p>
          </fieldset>
        </form>
        {error && <div>Login failed...</div>}
      </div>
      <Signup />
    </main>
  );
};

export default Login;
