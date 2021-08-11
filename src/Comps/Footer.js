import React from 'react'
import '../Style/footer.css'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPatreon } from 'react-icons/fa';
import {Avatar} from '@material-ui/core'
import avatar from '../Img/me.jpg'

const Footer = () => {
    return (
        <div > 
 
            <div className='avatar-footer'>
              <Avatar src={avatar} style={{height:'150px', width:'150px'}}/>
          </div>
        <div className='footer'>
       
            <div className='footer-top'>
                  <div className='footer-top-left'>
                  
                  </div>

            </div>
            <div className='footer-bottom'> 
               <div className='flex-column-left'>
               <hr/>
              </div>     
                  <a href='https://www.youtube.com/channel/UC2BR_6GXKLCMX9SEETnO7KQ' target='blank'><IoLogoYoutube className='yticon' size='30px' color='black'/></a>
                  <a href='https://www.facebook.com/Anikreza22/' target='blank'> <AiFillFacebook className='fbicon' size='30px' color='black'/></a>
                  <a href='https://www.instagram.com/anikrezain/?hl=en' target='blank'><FaInstagramSquare className='inicon' size='30px' color='black'/></a>
                  <a href='https://twitter.com/TanvirRezaAnik1' target='blank'> <AiFillTwitterSquare className='ttricon' size='30px' color='black'/></a>
                  <a href='https://www.patreon.com/user?u=36041123' target='blank'> <FaPatreon className='pticon' size='30px' color='black' /></a>
                  <div className='flex-column-right'>
               <hr/>
              </div>  
            </div>
            <div className='footer-footer'>
                <h2>Tanventure</h2>
                <p>Copyright © 2021 Tanvir Reza Anik</p>
                <a href='#' style={{textDecoration:'none', color:'black'}}>Privacy Policy</a>
            </div>
        </div>
        </div>
    )
}

export default Footer
