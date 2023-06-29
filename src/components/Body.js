
import {react, useEffect, useState} from 'react'
import { restaurantList } from "../utils/dummyData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';

import { Link } from 'react-router-dom';
// const Body=()=>{

//     const[searchText,setSearchText]=useState([]);
//     const[restaurantList,setRestaurantList]=useState([]);
//    const[filteredRestaurant,setFilteredRestaurant]=useState([]);

//     useEffect(()=>{
//         getRestaurants();
//     },[])

//     const getRestaurants= async()=>{
//         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
//         const json=await data.json();
//         console.log(json);
//         setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
//         setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
//     }

//     if(restaurantList.length === 0){
//         return <Shimmer/>
//     }
//     return <div className="body">
//       <div className="search">
//         <input type='text' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
//         <button onClick={()=>{
//           const filteres=restaurantList.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
//         //   setRestaurantList(filteres);
//           setFilteredRestaurant(filteres);
//         }}>Search</button>
//       </div>
  
//       <div className="res-container">
//         {/* <RestaurantCard resData={restaurantList[0]}/> */}
//        {filteredRestaurant.map((restaurant)=>{
//         //   return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         <Link
//         key={restaurant.data.id}
//         to={"/restaurants/" + restaurant.data.id}
//       >
//         <RestaurantCard resData={restaurant} />
//       </Link>
//        })}
       
//       </div>
//     </div>
//   }
//   export default Body;  
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
    useEffect(() => {
      getRestaurants();
    }, []);
  
    const getRestaurants = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setRestaurantList(json?.data?.cards[2]?.data?.data?.cards || []);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards || []);
    };
  
    return (
      <div className="body">
        <div className="search p-2 bg-pink-50 my-2">
          <input
            type="text"
            placeholder='Search'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className='p-1 m-1 bg-green-200 rounded-lg'
            onClick={() => {
              const filtered = restaurantList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
  
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.data.id} to={`/restaurants/${restaurant.data.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  export default Body;
  