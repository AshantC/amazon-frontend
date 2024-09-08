import React from 'react';
import "./NavbarBanner.css";
import MenuIcon from '@mui/icons-material/Menu';

const NavbarBanner = () => {
  return (
    <div className='navbarBanner'>
      <div className="navbarBannerOptionLeft">
        <div className='optionNav'></div>
      </div>
      <div className="navbarBannerRightSide">
        <img src="https://f.media-amazon.com/images/G/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg" alt="amazonPrime Logo" />
      </div>
    </div>
  )
}

export default NavbarBanner
