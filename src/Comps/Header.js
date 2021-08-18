import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = () => {

    let user=JSON.parse(window.sessionStorage.getItem('user'));
    console.log('sessionStorage',window.sessionStorage.getItem('user'));
    const his = useHistory();

    
    const logout =(e)=>{
        
        window.sessionStorage.clear();
        console.log('localstrg',window.sessionStorage.getItem('user'))   
        his.push('/');
        window.location.reload(); 
        console.log('userafterlogout',user);
    }
    console.log('user',user);
    return (
       
        <div style={{width:'200%', float:'left', marginLeft:'-326px'}}>
            <Navbar bg='success' variant='light'>
                
                <Nav className='mr-auto navbar_wrapper'>
                    {
                        (user?.name)?
                        <>
                              <Link style={{color:'black'}} to='/add' > Add Product </Link> 
                              <Link style={{color:'black'}} to='/list' >Product List </Link> 
                        </>
                        :
                        <>
                              <Link style={{color:'black'}} to='/' > LogIn</Link> 
                              <Link style={{color:'black'}} to='/register' > Register</Link> 
                        </>
                    }

      
                </Nav>
                { (user?.name)?
                <Nav style={{float:'right', marginLeft:'75%'}}>
                    <NavDropdown title={user?.name}>
                   
                        <DropdownItem onClick={logout}>LogOut</DropdownItem>
                   
                    </NavDropdown>
                </Nav>
                : null
                }
            </Navbar>
        </div>
    )
}

export default Header
