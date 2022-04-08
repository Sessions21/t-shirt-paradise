import React from 'react'
import aboutImage from "../assets/images/cover-3.png"

function About() {
  return (
    <div>
      <img className="background" src={aboutImage} alt="paradise scene"></img>
      <div className='about-section'>
        <h1>About Our Company...</h1>
        <p className='text'>
          Smith Sales Inc. was established in 1998.  We serve as a design compnay that specializes in print and embroidery of art, logos, and emblems on almost any medium. We have been serving the businesses, schools, teams, and private clients of northern Utah for almost 3 decades. We are always open to participate in local fundraisers and events, or to help an individual see an idea come to life.  Our work can be seen everywhere from your local little league team, to the large corporate events. Our goal is to provide a quality print at an honest price.  
        </p>
        <div className='skills'>
          <span>Print and Embroidery</span>
          <span>Events and Advertising</span>
          <span>Clothing and Products</span>
        </div>
      </div>
    </div>
  )
}

export default About