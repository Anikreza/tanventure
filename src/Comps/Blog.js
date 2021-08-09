
import React, {useState} from 'react'
import Data from "../Comps/Images";
import '../Style/blog.css'
import { BsSearch } from 'react-icons/bs';
import a from '../Img/cc.jpg'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";

const GalleryReact = () => {

    const [search, setSearch]= useState('')

    const srch =(e)=>{
       e.preventDefault();
       setSearch(e.target.value)
    }





    const [items, setItems] = useState(Data);
    
    const filterItem = (e) => {
       
        const updatedItems = Data.filter((data) => {
            return data.country === search;
        });

        setItems(updatedItems);
       
    }

  return (
    <div className='blog-top'>
    <div className='blog'>
                   <div className='top'>  


                   <form onSubmit={(e)=>e.preventDefault()}>
                   <button  onClick={filterItem}><BsSearch/></button>
                    <input onChange={srch} placeholder='Search By Country'/> 
                   
                    <button  onClick={() => setItems(Data)}>All</button>
                    </form>
                    </div> 
            <ul className='nav-ul2'>
                 <li> <NavLink path to="/about" activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}>ABOUT TAN </NavLink> </li>
                 <li> <NavLink  to='/gallery' activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> GALLERY</NavLink> </li>
                 <li> <NavLink to='/' activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> TANVENTURE</NavLink> </li>
                 <li> <NavLink  to='/blog' activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> BLOG  </NavLink> </li>
            </ul>
                      
          <div className='main'>      
               {items.map((elem) =>
                 {       
                   return (
                     <div>   
                        <div className='blog-header'>
                            <h2>{elem.header} তানভীর রেজা অনিকতানভীর রেজা অনিকতানভীর রেজা অনিক</h2>
                            <p1 >তানভীর রেজা অনিক</p1>
                        </div>
                        <div className='blogdata'>

                       <div className='blog-image'>
                         <a href={elem.link} target="blank">    
                          <img src={elem.image} /> 
                         </a> 
                      </div>  

                    <div className='blog-caption'>
                    <h3> {elem.caption} </h3>
                    </div>

                    </div>
                    </div>

                   )                                  
                  })        
               }
             
       </div>  
       </div>
       <div className="content">
  
  
  <div className="RandomQoutes">
    <p>#AdventureIsOutThere</p>
    <p>DidIEverTellYouTheDefinition</p>
    <p>OfInsanity?</p>
    <p>InsanityIsDoingTheExact</p>
    <p>SameThingOverAndOverAndOver</p>
    <p>AgainExpectingThingsToChange!</p>
    <p>NeverGetOutOfStyle!</p>
    <p>GoingToTheMounTainISGoingHome</p> 
    <p>MountainsOrOceans?</p><p>MountainsANYDAY</p>
    <p> ItsLikeYourSoulIsOnFire</p>
    <p> #AdventureIsOutThere</p>
    <p>DidIEverTellYouTheDefinition</p>
    <p>OfInsanity?</p> 
    <p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p>
    <p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p>
    <p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p><p>#AdventureIsOutThere</p>
   
  </div>
  
  </div>
  
        </div>
        
    )
}

export default GalleryReact

