import React from 'react';
import "./NavbarBelt.css";
import amazonLogo from "../../../assets/amazonLogo.png";
import india from "../../../assets/india.png";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarBelt = () => {
    return (
        <div className='navbarBelt'>
            <div className='leftNavBelt'>
                <div className='leftNavBeltLogo'>
                    <img src={amazonLogo} alt="amazon logo" className='amazonLogoNavbar' />
                    <span className='navbar_inLogo'>.in</span>
                </div>

                <div className='leftNavBeltLocation'>
                    <div className='leftNavBeltLocationImg'>
                        <LocationOnOutlinedIcon className='leftNavBeltLocationImageIcon' sx={{ fontSize: "22px" }} />
                    </div>
                    <div className='navbarBeltLocationPlace'>
                        <div className='leftNavBeltLocationTop'>Delivering to Pune 411032</div>
                        <div className='leftNavBeltLocationBottom'>Update Location</div>

                    </div>
                </div>
            </div>
            <div className='navbarBeltSearchBox'>
                <div className="navbarBeltSearchDiv">
                    <div className='navbarBeltSearchBoxAll'>
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownOutlinedIcon sx={{ size: "20px" }} className='' />
                    </div>

                    <input type="text" className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />

                    <div className='searchIconNavbarBelt'>
                        <SearchIcon sx={{ fontSize: "26px" }} className='searchIconNavbarIcon' />
                    </div>


                </div>
            </div>

            <div className='rightSideNavbarBelt'>
                <div className="indianFlagCode">
                    <img src={india} alt="indian flag" className='indiaFlag' />
                    <div className='indiaCodeNavbarBelt'>
                        EN
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }} className='indiaCodeNavbarBeltDrp' />
                    </div>
                </div>

                <div className="helloSignInNavbarBelt">
                    <div className="helloTopNavbarBelt">Hello, User</div>
                    <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
                </div>

                <div className="helloSignInNavbarBelt">
                    <div className="helloTopNavbarBelt">Returns</div>
                    <div className="indiaCodeNavbarBelt">& Orders</div>
                </div>

                <div className="helloSignInNavbarBelt">
                    <span className="cartItemNavbarBelt">2</span>
                    <div className="indiaCodeNavbarBelt">
                        <ShoppingCartOutlinedIcon />
                        <span className='cartTitle'>Cart</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavbarBelt
