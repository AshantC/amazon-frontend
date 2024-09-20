import React from 'react';
import "./Products.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Products = () => {
  let subMenuList = [
    { 'name': "Mobiles & Accessories" },
    { 'name': "Laptops & Accessories" },
    { 'name': "TV & Home Entertainment" },
    { 'name': "Audio" },
    { 'name': "Cameras" },
    { 'name': "Computer Peripherals" },
    { 'name': "Smart Technology" },
    { 'name': "Musical Instruments" },
    { 'name': "Office & Stationary" },
  ]
  return (
    <div className='productPage'>
      {/* Sub Navigation Banner */}
      <div className="productTopBanner">
        <div className="productTopBannerItems">
          Electronics
        </div>
        {
          subMenuList.map((item, index) => {
            return (
              <div className="productTopBannerITemsSubMenu" key={index}>
                {item.name}
              </div>

            );
          })
        }
      </div>

      {/* Main Page */}
      <div className="productsPageMain">

        {/* Left Category */}
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Macbooks</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Average Customer Review</div>

            <div className="ratingLeftbox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            <div className="ratingLeftbox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            <div className="ratingLeftbox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
            <div className="ratingLeftbox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>
          </div>
        </div>

        {/* Right Main */}
      </div>
    </div>
  )
}

export default Products
