import React from 'react'; 
import '../Style/nav.css';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <div className='nav'>
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
                 <li> <NavLink path to="/about" activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}>ABOUT TAN </NavLink> </li>
                 <li> <NavLink  to='/gallery' activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> GALLERY</NavLink> </li>
                 <li> <NavLink to='/' activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> TANVENTURE</NavLink> </li>
                 <li> <NavLink  to='/blog' activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> BLOG  </NavLink> </li>
            </ul>
        </div>
    )
}

export default Navbar
