import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";
import useProducts from "../../hooks/UseProduct";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const useuseNavigate = useNavigate()

  const handleRemove = (key) => {
    const  newCart = cart.filter(product => product.key !== key)
    setCart(newCart)
    removeFromDb(key)
  };
  
  const handlePlaceOrder = () =>{
    useuseNavigate('/shipping')
    // setCart([])
   // clearTheCart()
   

  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
         <button onClick={handlePlaceOrder} className="btn-purchase">Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
