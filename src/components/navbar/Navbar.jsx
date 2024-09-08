import React from 'react';
import "./Navbar.css"
import NavbarBelt from './navbarBelt/NavbarBelt';
import NavbarBanner from './navbarBanner/NavbarBanner';

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavbarBelt />
        <NavbarBanner />
    </div>
  )
}

export default Navbar
