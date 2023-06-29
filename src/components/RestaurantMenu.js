
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
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const getRestaurantInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

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

      <div>
        {/* <h2 className="text-2xl font-extrabold">Menu</h2> */}
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

