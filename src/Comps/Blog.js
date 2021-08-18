
import React, {useState} from 'react'
import '../Style/blog.css'
import { BsSearch } from 'react-icons/bs';
import { IoLogoAngular } from 'react-icons/io';
import DivCarousel from 'react-multi-carousel';
import a from '../Img/cc.jpg'
import avatar from '../Img/me.jpg'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import c from '../Img/1.jpeg'
import d from '../Img/5.jpg'
import {Avatar} from '@material-ui/core'
import Footer from './Footer'
import Blogfeed from './Blogfeed';
import Pagination from './Pagination';
import RandomQoute from './RandomQoute';

const GalleryReact = ({Data}) => {
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
    const [items, setItems] = useState(Data)
    
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
                <h2 style={{float:'left', marginTop:'-35px', marginLeft:'70px',fontWeight:'lighter', color:'rgb(9, 41, 23)'}}><IoLogoAngular size='30px'/></h2>
                <button onClick={Search2}><BsSearch/></button>
                <input onChange={Search} placeholder={Data[0].src}/> 
                <button  onClick={() => setItems(Data)}>All</button>
                <hr style={{width:'150%'}}/>
                </form>
                </div>  

                <div className='top-ul'>
                      <li> <Link to='/blog'>Bikepacking</Link></li>
                      <li><a>Backpacking</a></li>
                      <li><a>Sports</a></li>
                      <li><Link to='/pm'>The Prime Minister</Link></li>
                      
               </div>
               <hr style={{width:'153%'}}/>  
  
                {items.map(i=>(
                         <Blogfeed
                             id= {i.header}
                             link={i.link}
                             header={i.header}
                             image={i.image}
                             caption={i.caption}
                         />
                         ))} 

                <Pagination/>
            </div>
          <RandomQoute/>
        </div>
        <Footer/>
        </div>
        
    )
}

export default GalleryReact

