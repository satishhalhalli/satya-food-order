import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log('API response:', json);

    const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurants);
    console.log('restaurantList after state update:', restaurants);
    //  setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };

  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  // if (restaurantList.length === -1) {
  //   return <Shimmer />;
  // }

  return (restaurantList.length <1) ? <Shimmer/> : (
    <div className="body">
      <div className="search p-2 ml-auto border-black">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="w-64 text-xs border border-gray-300 shadow-md focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant?.info} />
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// const Body = () => {
//     const [searchText, setSearchText] = useState("");
//     const [restaurantList, setRestaurantList] = useState("");
//     const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
//     useEffect(() => {
//       getRestaurants();
//     }, []);
  
//     const getRestaurants = async () => {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
//       );
//       const json = await data.json();
//       console.log("API response:", json);
//       setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       console.log("restaurantList after state update:", restaurantList);
//       setFilteredRestaurant(json?.data?.cards[5]?.data?.data?.cards || []);
//     };
    
  
//     return (
//       <div className="body">
//         <div className="search p-2 bg-pink-50 my-2">
//           <input
//             type="text"
//             placeholder='Search'
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button className='p-1 m-1 bg-green-200 rounded-lg'
//             onClick={() => {
//               const filtered = restaurantList.filter((res) =>
//                 res.data.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filtered);
//             }}
//           >
//             Search
//           </button>
//         </div>
  
//         <div className="flex flex-wrap">
//           {filteredRestaurant.map((restaurant) => (
//             <Link key={restaurant.data.id} to={`/restaurants/${restaurant.data.id}`}>
//               <RestaurantCard resData={restaurant?.info} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     );
//   };
//   export default Body;
  