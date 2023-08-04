import { IoStar } from "react-icons/io5";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("reached to restocrad")
    const{ cloudinaryImageId,
      name,
      cuisines,
      locality,
      lastMileTravelString,
      costForTwo,
      avgRating}=resData;
    return (<div className="w-[200px] p-2 m-2 shadow-lg bg-white-400 border border-black-100 hover:bg-slate-200 duration-100 ease-in-out shadow-2xl" >
    
      <img  className="res-logo" alt="logo"  src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }/>
        <h2 className="font-bold">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
        <span>

        <div
                  className={`flex items-center gap-2 font-bold text-sm px-1 rounded w-fit 
                  ${
                    avgRating >= 4
                      ? "bg-slate-200 text-green-700"
                      : "bg-orange-200 text-orange-600"
                  }
                  `}
                >
                  <IoStar />
                  <p>{avgRating}</p>
                </div>
        <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwo}</h4>
        </span>
      
    </div>
    );
  }

  export default RestaurantCard;