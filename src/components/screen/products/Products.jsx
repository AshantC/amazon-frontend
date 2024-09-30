import React from 'react';
import "./Products.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ProductsList from './ProductsList.json'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/Actions';

// Used for notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Products = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  const handleAddToCart = (item) => {
    toast.success("Added in Cart",{
      position: "bottom-right"
    })
    dispatch(addToCart(item))
  }

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

      {/* Main Page Start*/}
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
            <div className="productsPageMainLeftCategoryCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Average Customer Review</div>

            <div className="productsPageMainLeftCategoryCategoryContentSub">Amazon Prime</div>
            <div className="productsPageMainLeftCategoryCategoryContentSub">Average Customer Review</div>

          </div>
        </div>

        {/* Right Main */}
        <div className="productsPageMainRight">


          <div className="productsPageMainRightTopBanner">
            1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
          </div>

          <div className="itemsImageProductPage">
            {/* Product Card */}
            {
              ProductsList.product.map((item, index) => {
                return (
                  <div key={item.id} className="itemsImageProductPageOne">
                    <div className="imgBlockitemsImageProductPageOne">
                      <img className='productImageProduct' src={item.imageUrl} alt="" />
                    </div>
                    <div className="productNameProduct">
                      <div>{item.name}</div>
                      <div className="productNameProductRating">
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      </div>
                      <div className="priceProductDetailPage">
                        <div className="currencyText">Rs.</div>
                        <div className="rateHomeDetail">
                          <div className="rateHomeDetailPrice">
                            {item.price}
                          </div>
                          <div className="addtobasketBtn" onClick={() => handleAddToCart(item)}>Add To Cart</div>
                        </div>

                      </div>
                      <div className="offProductPage">Upto 10% Off on select cards</div>
                      <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
                    </div>
                  </div>
                );
              })
            }
            {/* <div className="itemsImageProductPageOne">
              <div className="imgBlockitemsImageProductPageOne">
                <img className='productImageProduct' src="https://m.media-amazon.com/images/I/41eFDIq5-6L._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
              </div>
              <div className="productNameProduct">
                <div>{"Dell 15 Thin & Light Laptop, Intel Core i5-1235U Processor/16GB DDR4 + 512GB SSD/Intel UHD Graphics/15 (38cm) FHD Display/Windows 11 + MSO'21/15 Month..."}</div>
                <div className="productNameProductRating">
                  <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                  <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                  <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                  <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                  <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                </div>
                <div className="priceProductDetailPage">
                  <div className="currencyText">Rs.</div>
                  <div className="rateHomeDetail">
                    <div className="rateHomeDetailPrice">
                      {3450}
                    </div>
                    <div className="addtobasketBtn">Add To Cart</div>
                  </div>

                </div>
                <div className="offProductPage">Upto 10% Off on select cards</div>
                <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Products
