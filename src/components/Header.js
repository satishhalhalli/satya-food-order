import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "./useOnline";
import { useSelector } from "react-redux";

import store from "../utils/Store";
const Header=()=>{

    const isOnline=useOnline();


    const cartItems= useSelector(store => store.cart.items)

    console.log(cartItems);

    return <div className="flex justify-between bg-pink-200 shadow-sm">
       <div>
         <img className="h-28 p-2" src={LOGO_URL}/>
          </div>
  
             <div className="nav-items">
               <ul className="flex py-10">
               
                <li className="px-2 font-semibold"><Link to="/"> Home</Link></li>
                <li className="px-2 font-semibold"> <Link to="/about">About </Link> </li>
                <li className="px-2 font-semibold"> <Link to="/Contact">Contact</Link> </li>
                <li className="px-2 font-semibold"> <Link to="/Groucery">Groucery</Link> </li>
                <li className="px-2 font-semibold"> <Link to="/Cart">Cart- {cartItems.length} - items</Link></li>
                <li className="px-2 font-semibold pr-10">OnlineStatus : {isOnline ? "✅" : "🔴" }</li>
               </ul>
              </div>
    </div>
  }

  export default Header;