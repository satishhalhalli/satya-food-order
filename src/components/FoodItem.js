
// import React from 'react';
// import { IMG_cdn_URL } from '../utils/constants';
// const FoodItem = (props) => {
//   const { name,category,imageId } = props.card.info;

//   return (
//     <div className='w-56 p-2 m-2 shadow-lg bg-pink-50'>
//         <img src={IMG_cdn_URL + imageId} />
//       <h2>{name}</h2>
//       <h3>{category}</h3>
//       {/* Render other details */}
//     </div>
//   );
// };

// export default FoodItem;

import React from 'react';
import { IMG_cdn_URL } from '../utils/constants';

const FoodItem = (props) => {
  const { name, category, imageId, price } = props.card.info;

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_cdn_URL + imageId} alt={name} />
      <h2>{name}</h2>
      <h3>{category}</h3>
      <p>Price: Rs. {price / 100}</p> {/* Assuming the price is in cents, so dividing by 100 */}
    </div>
  );
};

export default FoodItem;


