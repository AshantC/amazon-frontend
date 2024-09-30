import React, { useState, useEffect } from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/Actions';

// Used for notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Cart = () => {
    const [cartItem, setCartItem] = useState([])
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // calculate price 
    let a = 0;
    let cost = cartItems.map((item)=>{return a = a + item.price})

    useEffect(() => {
        setCartItem(cartItems);
    }, [])

    const handleRemoveFromCart = (id)=>{
        toast.error("Item Removed From Cart",{
            position: "bottom-right"
          })
        dispatch(removeFromCart(id))
    }
    return (
        <div className='cart'>
            {/* Left Side Start */}
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="deselectAllCart">Deselect All Items</div>
                <div className="cartPriceTextDivider">Price</div>

                {/* Items Container Start */}
                {
                    cartItems.map((item, index) => {
                        return (
                            <div className="cartItemDiv" key="index">
                                <div className="cartItemBlock">
                                    <div className="cartItemLeftBlock">
                                        <div className="cartItemLeftBlockImage">
                                            <img src={item.imageUrl} alt="" className="cartItemLeftBlockImg" />
                                        </div>
                                        <div className="cartItemLeftBlockDetails">
                                            <div className='cartItemProductName'>{item.name}</div>
                                            <div className="inStockCart">In Stock</div>
                                            <div className="elgFreeShp">Elligible for FREE Shipping</div>
                                            <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" className="fulfillImg" /></div>
                                            <div className="removeFromCart" onClick={()=>handleRemoveFromCart(item.id)}>Remove From Basket</div>
                                        </div>
                                    </div>
                                    <div className="cartItemRightBlock">
                                        Rs. {item.price}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

                {/* Items Container End */}

            </div>
            {/* Left Side End */}


            {/* Right Side Start */}
            <div className="topRightCart">
                <div className="subTotalTitle">Subtotal ({cartItem.length} items) : <span className="subTotalTitleSpan">Rs. {a}</span></div>
                <div className="giftAddTo">
                    <input type="checkbox" />
                    <div>This order contains a gift.</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>
            </div>
            {/* Right Side End */}
            <ToastContainer />

        </div>
    )
}

export default Cart
