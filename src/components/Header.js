import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

import applogo from '../img/foodvilla.png'
import useOnline from "./useOnline";
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillCartFill } from "react-icons/bs";
import store from "../utils/Store";
const Header=()=>{
   
    const isOnline=useOnline();


    const cartItem= useSelector(store => store.cart.cartItems)

    // console.log(cartItems);

    return <div className="flex justify-between bg-gradient-to-b from-rose-300  to bg-white-100 shadow-lg">

      <Link to="/">
       <div>
         <img className="h-28 p-2" src={applogo}/>
          </div>
          </Link>
             <div className="nav-items">
               <ul className="flex py-10">
               
                <li className="px-2 font-semibold hover:text-red-800 transition-all font-serif duration-300 ease-in-out "><Link to="/"> Home</Link></li>
                <li className="px-2 font-semibold hover:text-red-800 transition-all font-serif duration-300 ease-in-out "> <Link to="/about">About </Link> </li>
                <li className="px-2 font-semibold hover:text-red-800 transition-all font-serif duration-300 ease-in-out "> <Link to="/Contact">Contact</Link> </li>
                <li className="px-2 font-semibold hover:text-red-900 transition-all font-serif duration-300 ease-in-out "> <Link to="/Groucery">Groucery</Link> </li>
                <li className="px-2 font-semibold hover:text-red-800 transition-all font-serif duration-300 ease-in-out "> <Link to="/Cart">
                {/* <BsFillCartFill className="text-4xl text-pink-900" {cartItem.length} />
                <div className="absolute text-white text-xs inset-0 flex justify-center items-center font-bold">
                {cartItem.length}
            </div> */}
            <>
       
            {/* <BsFillCartFill  />
              {cartItem.length > 0 && (
                <div className="absolute inset-0 flex justify-center items-center text-black text-xs font-bold">
                  {cartItem.length}
                </div>
              )} */}
      {/* <div className="absolute text-white text-xs inset-0 flex justify-center items-center font-bold"> */}
        
        </>
      {/* </div> */}
           <FaShoppingCart>
               
                 </FaShoppingCart>
                 ({cartItem.length})
                  </Link></li>
                <li className="px-2 font-semibold pr-10">OnlineStatus : {isOnline ? "✅" : "🔴" }</li>
               </ul>
              </div>
    </div>
  }

  export default Header;