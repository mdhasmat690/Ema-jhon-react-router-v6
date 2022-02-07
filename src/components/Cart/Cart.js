import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  // const totalReducer = (previous, product)=> previous + product.price

  // const total = cart.reduce(totalReducer, 0)

  let totalQuantity = 0;
  let total = 0;
  // console.log(cart, "cart.....");
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity
  
  }

  // console.log(totalQuantity);

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grantTotal = total + shipping + tax;

  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {totalQuantity}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grantTotal.toFixed(2)}</p>
      {props.children}
    </div>
  );
};

export default Cart;
