import React, {useState} from 'react'; 
import '../Style/nav.css';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
    const [nav, setNav]=useState(false);
    const magic=()=>{
        if(window.scrollY>=100){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }
 
    window.addEventListener('scroll', magic);
    return (
        <div className={nav?'nav-black': 'nav'}>
            <div className="dropdown">
                <button className="dropbtn">ADVENTURES
                   <RiArrowDropDownLine/>
                </button>

                <div class="dropdown-content">
                    <a href="#">BANGLADESH</a>
                    <a href="#">INDIA</a>
                    <a href="#">SRILANKA</a>
                 </div>

             </div> 

            <ul className='nav-ul'>
                 <li> <NavLink path to='/about' activeStyle={{ fontWeight: "bold",color: nav?'#4af795': 'rgb(5, 66, 5)', opacity:'.6'}}>ABOUT TAN </NavLink> </li>
                 <li> <NavLink  path to='/gallery' activeStyle={{ fontWeight: "bold",color: nav?'#4af795': 'rgb(5, 66, 5)', opacity:'.6'}}> GALLERY</NavLink> </li>
                 <li> <NavLink path to='/tanventure/' activeStyle={{ fontWeight: "bold",color: nav?'#4af795': 'rgb(5, 66, 5)', opacity:'.6'}}> TANVENTURE</NavLink> </li>
                 <li> <NavLink  path to='/blog' activeStyle={{ fontWeight: "bold",color: nav?'#4af795': 'rgb(5, 66, 5)', opacity:'.6'}}> BLOG  </NavLink> </li>
           </ul>
        </div>
    )
}

export default Navbar
