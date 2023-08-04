
import React, { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { IMG_cdn_URL } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const addFoodItem = (item) => {
    console.log("moving from menu", item);
    dispatch(addItem(item.card.info));
  };

  const getRestaurantInfo = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
      setLoading(false); // Set loading to false once data is available
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
      setResInfo(-1); // Set -1 to indicate an error in fetching data
      setLoading(false);
    }
  };

  if (loading) return <Shimmer />; // Show shimmer or a loading indicator while waiting for data

  if (resInfo === -1) return <p>Error loading restaurant data.</p>; // Show an error message if there was an error fetching data

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo.cards[0].card.card.info;

  const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="flex">
      <div className="w-64 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_cdn_URL + cloudinaryImageId} alt={name} className="h-48 w-full object-cover" />
        <h2 className="font-bold text-2xl">{name}</h2>
        <h2 className="text-lg">{cuisines}</h2>
        <h3 className="text-sm">{costForTwoMessage}</h3>
      </div>

      <div className='px-5'>
        <h2 className="text-2xl font-extrabold">Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="flex justify-between items-center my-2">
              <div>
                <h3 className="font-bold">{item.card.info.name}</h3>
                <p>Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
              </div>
              <button
                className="bg-green-100 px-4 py-2 rounded-lg"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default RestaurantMenu;
