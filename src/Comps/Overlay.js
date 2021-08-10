import React from 'react'

const Overlay = ({image, text}) => {
    return (
  
             <div className="container-a">
                    <img src={image} className="image"/>
                    <div className="overlay">
                    <div className="text"> <p>{text}</p></div>
                    </div>
                    </div>  
      
    )
}

export default Overlay
