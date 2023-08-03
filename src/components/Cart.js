
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let totalAmount = 0;
  cartItems.forEach((item) => {
    const { price } = item.card.info;
    totalAmount += price;
  });

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-lg py-5">CartItems: {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex">{cartItems.map((item) => <FoodItem card={item.card} />)}</div>

      <h1 className="font-extrabold text-2xl py-5">Total Amount: Rs. {totalAmount / 100}</h1>

      {isOrderPlaced ? (
        <p className="font-bold text-green-500">Order Successful!</p>
      ) : (
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handlePlaceOrder}>
          Submit Order
        </button>
      )}
    </div>
  );
};

export default Cart;



