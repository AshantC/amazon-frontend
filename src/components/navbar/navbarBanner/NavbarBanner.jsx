import React from 'react';
import "./NavbarBanner.css";
import MenuIcon from '@mui/icons-material/Menu';
import amazonPrime from "../../../assets/amazonPrimeLogo.jpg"
import {Link } from 'react-router-dom';

const NavbarBanner = () => {
  const options = [
    { "name": "Fresh" },
    { "name": "Amazon Mini" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Today's Deal" },
    { "name": "Mobiles" },
    { "name": "Electronics" },
    { "name": "Prime" },
    { "name": "Customer Service" },
    { "name": "Prime" },
    { "name": "Electronics" },
    { "name": "Fashion" },
    // { "name": "New Releases" },
  ]
  return (
    <div className='navbarBanner'>
      <div className="navbarBannerOptionLeft">

        <div className='optionNavbarBanner'>
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionNavbarBanner">All</div>
        </div>

        {
          options.map((item, index) => {
            return (
              <Link to={'/products'} className='optionNavbarBanner' key={index}>
                <div className="allOptionNavbarBanner">{item.name}</div>
              </Link>
            )
          })
        }


      </div>

      <div className="navbarBannerRightSide">
        {/* <img src={amazonPrime} alt="amazonPrime Logo" /> */}
        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CallMeBae/400x39-SWM-NP._CB564709123_.jpg" alt="amazonPrime Logo" />
      </div>
    </div>
  )
}

export default NavbarBanner
