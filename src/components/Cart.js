


import applogo from '../img/foodvilla.png'
import no_items from '../img/no_items_found.png'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { addItem, clearCart, deletecartItems, removeItem } from '../utils/cartSlice';
import { IMG_cdn_URL } from '../utils/constants';


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log('cart items', cartItems);
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const addFoodItem = (item) => {
    console.log("when movinng item",item);
    dispatch(addItem(item));
  };

  // let totalAmount = 0;
  // cartItems.forEach((item) => {
  //   const { defaultPrice,price} = item;
  //   console.log("total",defaultPrice);
  //   totalAmount += defaultPrice * item.itemCount;
  //   console.log("totla amount", totalAmount);
  // });

  let totalAmount = 0;
cartItems.forEach((item) => {
  const { defaultPrice, price, itemCount } = item;
  const itemPrice = defaultPrice !== undefined ? defaultPrice : price;
  totalAmount += itemPrice * itemCount;
});

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    dispatch(clearCart());
  };

  return (

    <div className='p-5 shadow-lg '>
    <div className='cart'>
      {/* Rest of the JSX */}
      <h1 className='font-extrabold text-2xl p-5'>Cart Items</h1>
      {cartItems.length > 0 ? (

        
        <div className="md:mx-28 mt-1 md:mt-6 flex md:gap-10 flex-col lg:flex-row ">

         
          <div className="lg:w-3/4 cart-scroll  border border-dotted  shadow-md ">
            {cartItems &&
              cartItems.map((item) => {
                const { name, defaultPrice,price
                  , itemCount, imageId } = item;
                return (
                  <div className="flex mb-5 items-center gap-2 md:gap-3 " key={item.id}>
                    <div className="w-[18%] ">
                    <img src={IMG_cdn_URL + imageId} alt={name} />

                    </div>
  
                    <div className="w-[60%] md:w-[52%] ">
                      <p className="text-base md:mb-2">{name}</p>
                      <div className="flex font-bold items-center mx-auto">
                        <LiaRupeeSignSolid />  {price ? price / 100 : defaultPrice / 100}
                      </div>
                    </div>
  
                    <div className="flex gap-2 w-[23%] md:w-[30%]  flex-col md:flex-row items-center">
                      <div className="border-green-200 rounded shadow mx-auto text-xs md:text-base">
                        <button
                          className="text-lg px-2 hover:text-green-700 "
                          onClick={() => dispatch(removeItem(item))}
                        >
                          -
                        </button>
                        <span className="px-1 md:px-2 font-medium">
                          {item.itemCount}
                        </span>
                        <button
                          className="font-medium px-2 hover:text-green-700"
                         

                         onClick={() => addFoodItem(item)}
                        >
                          +
                        </button>
                      </div>
  
                      <div
                        onClick={() => dispatch(deletecartItems(item))}
                        className="hidden md:flex transition-all hover:text-red-900 bg-slate-400   cursor-pointer p-2 rounded my-auto"
                      >
                        <RxCross1 />
                      </div>
  
                      <div
                        // onClick={() => dispatch(removeCartItem(item))}
                        className="md:hidden transition-all w-18 text-red-600 cursor-pointer rounded my-auto px-1 shadow text-sm"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="w-2/5 p-2 m-2 shadow-lg bg-pink-50">
        <img  src={applogo} className="h-48 w-full object-cover" />
        <h2 className="font-bold text-2xl">satish</h2>
        <h1 className="font-extrabold text-2xl py-5">Total Amount: Rs. {totalAmount / 100}</h1>
        {isOrderPlaced ? (
        <p className="font-bold text-green-500">Order Successful!</p>
      ) : (
       <button className="bg-blue-500 bg-gradient-to-l from-green-800 to bg-green-200 text-white p-2 rounded" onClick={handlePlaceOrder}>
          Click Here to ChaeckOut>>>>>
        </button>
      )}
      </div>
        </div>
      ) : (
        /* Add a message when cart is empty */
        
        // <p>Your cart is empty.</p>
        <div className='flex items-center '>
        <img src={no_items} alt='no_items'/>
        </div>
      )}
    </div>

   <div className='p-9'>
    <h1 className="font-extrabold text-2xl py-5">Total Amount: Rs. {totalAmount / 100}</h1>

    {isOrderPlaced ? (
        <p className="font-bold text-green-500">Order Successful!</p>
      ) : (
       <button className="bg-blue-500 text-white p-2 rounded" onClick={handlePlaceOrder}>
          Submit Order
        </button>
      )}
</div>

    </div>
  );
  
};

export default Cart;




