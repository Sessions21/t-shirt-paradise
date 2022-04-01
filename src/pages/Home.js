import React from 'react';
import coverImage from "../assets/images/cover-2.png"

function Home() {

  return (
    <div>
      <img className="background" src={coverImage} alt="paradise scene"></img>
      <div className='start'>
        <h2 className='intro'>The place to share your <span className='love'>LOVE</span> of the T-Shirt!</h2>
        <a href="/login"><button className='startButton'> Get Started </button></a>
      </div>
    </div>
  )
}

export default Home