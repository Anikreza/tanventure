
import React, {useState} from 'react'
import Data from "../Comps/Images";
import '../Style/blog.css'
import { BsSearch } from 'react-icons/bs';
import DivCarousel from 'react-multi-carousel';
import a from '../Img/cc.jpg'
import avatar from '../Img/me.jpg'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import c from '../Img/1.jpeg'
import d from '../Img/5.jpg'
import {Avatar} from '@material-ui/core'

const GalleryReact = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


    const [search, setSearch]= useState('')
    const [items, setItems] = useState(Data);
    
    const Search= (e) => {
               e.preventDefault();
               setSearch(e.target.value)
               const updatedItems = Data.filter((data) => {
            return data.country.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
        if (search==='') {
          setItems(Data)
        }
        else{
          setItems(updatedItems);
        } 
    }
    const Search2= (e) => {
               e.preventDefault();
               const updatedItems2 = Data.filter((data) => {
            return data.country.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
        if (search==='') {
          setItems(Data)
        }
        else{
          setItems(updatedItems2);
        } 
    }

  return (
    <div className='blog-container'>
    <div className='blog-top'>
               <div className='avatar-blog'>
              <Avatar src={avatar} style={{height:'150px', width:'150px'}}/>
          </div>
    <div>
    <div className='blog-slider'>
       
            <DivCarousel
                        className='carousel'
                        swipeable={false}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={600}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        deviceType={'desktop'}            
                        >
                        <div> <Link to='/about'> <img src={a}/> </Link> </div>
                        <div><Link to='/about'> <img src={d}/> </Link></div>
                        <div><Link to='/about'> <img src={c}/> </Link></div>
                        <div><Link to='/about'> <img src={d}/> </Link></div>
                        </DivCarousel>  
            </div>

           <div className='main'>  
          
              <div className='top'>  
                 
                <form onSubmit={(e)=>e.preventDefault()}>
                <h2 style={{float:'left', marginTop:'-18px', marginLeft:'40px',fontWeight:'lighter'}}>Tanventure</h2>
              
                <button onClick={Search2}><BsSearch/></button>
                <input onChange={Search} placeholder='Search By Country'/> 

                <button  onClick={() => setItems(Data)}>All</button>
                <hr style={{width:'150%'}}/>
                </form>
                </div>  
                <div className='top-ul'>
                      <li> <Link to='/blog'>Bikepacking</Link></li>
                      <li><a>Backpacking</a></li>
                      <li><a>Sports</a></li>
                      <li><a>The Prime MInister</a></li>
                      
                </div>
                <hr style={{width:'153%'}}/>  

               <div  className='blog'>
               {items.map((elem) =>
                 {       
                   return (
                  
                     <div>      
                        <div className='blog-header'>
                        <Link style={{ textDecoration:'none'}}to={elem.link}>
                            <h2>{elem.header} </h2>
                            <p1 >তানভীর রেজা অনিক</p1>
                        </Link>
                        </div>
                        <div className='blogdata'>

                       <div className='blog-image'>
                         <Link to={elem.link}>    
                          <img src={elem.image} /> 
                         </Link> 
                      </div>  

                    <div className='blog-caption'>
                   
                    <h3> {elem.caption} <br/><br/> {elem.caption2} 
                    <Link className='link-readmore' to={elem.link} >...Contunue reading</Link> </h3>
                    </div>
                    </div>
                    </div>
                   )                                  
                  })     
               }
              </div>
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
        </div>
        
    )
}

export default GalleryReact

