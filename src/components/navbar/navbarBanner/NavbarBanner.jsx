import React from 'react';
import "./NavbarBanner.css";
import MenuIcon from '@mui/icons-material/Menu';
import amazonPrime from "../../../assets/amazonPrimeLogo.jpg"

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
              <div className='optionNavbarBanner' key={index}>
                <div className="allOptionNavbarBanner">{item.name}</div>
              </div>
            )
          })
        }


      </div>

      <div className="navbarBannerRightSide">
        <img src={amazonPrime} alt="amazonPrime Logo" />
      </div>
    </div>
  )
}

export default NavbarBanner
