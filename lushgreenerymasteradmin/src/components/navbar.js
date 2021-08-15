import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Menu,
} from 'semantic-ui-react'


    
// <Menu.Item as='a'>
// <Link to="/profile" className= "nav-link">Profile 
// </Link>
// </Menu.Item>
function Navbar() {

  return (
    <>
<Menu>
    <Menu.Item as='a'>LushgreeneryMasterAdmin
    </Menu.Item>

    <Menu.Item as='a'>
    <Link to="/advisors" className= "nav-link">Advisors
    </Link>
    </Menu.Item>


  
    <Menu.Item position='right'>
    <Button as='a'> 
    <Link to="/login" className= "nav-link">Logout
    </Link>
    </Button>
    </Menu.Item>

  </Menu>
    </>
  )
}

export default Navbar;
