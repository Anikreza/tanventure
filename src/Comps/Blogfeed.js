import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";

const Blogfeed = ({header,link,image,caption}) => {
    return (
       
        <div>
          <div className='blog-header'>
                     <Link style={{ textDecoration:'none'}}to={link}>
                            <h2>{header} </h2>
                            <p1 >তানভীর রেজা অনিক</p1>
                      </Link>
          </div>
            
              <div className='blogdata'>
                   <div className='blog-image'>
                       <Link to={link}>    
                          <img src={image} /> 
                       </Link> 
                  </div>  

                  <div className='blog-caption'>     
                      <h3>  {caption} 
                      <Link className='link-readmore' to={link} >...Contunue reading</Link> </h3>
                  </div>

             </div>
        </div>
    )
}

export default Blogfeed
