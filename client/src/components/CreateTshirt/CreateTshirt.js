import React from 'react';
import './CreateTshirt.css';

 const CreateTshirt=({display,textFormat})=>{
    

    return (<div className="card card-content">
        <div className="imgThsirt text-center">
        <img
         className="img-responsive"
          // src={NEED TO HAVE LINK TO THEIR SITE FOR THE SHIRTS OR GENERAL SITE TO PULL INFORMATION FROM FOR DISPLAY${display.tshirtColor}`}
          alt="img-Tshirt"/>
        </div>
        
        <div className="memeText text-center">
            
            <img className='logo' src={`${display.logo}` || "http://via.placeholder.com/50x50"} alt="meme-text"/>
            
            <div className="upperText"> 
                <p style={{fontSize:textFormat,color:display.textColor}}>{display.upperText}</p>
            </div>

            <img className="img" src={`${display.url}` || "http://via.placeholder.com/400x300"} alt="meme-text"/>

            <div className="lowerText">
                <p style={{fontSize:textFormat,color:display.textColor}} >{display.lowerText}</p>
            </div>
        </div>
      
    </div>)
}

export default CreateTshirt;