
const RestaurantCard = (props) => {
    const{ cloudinaryImageId,
      name,
      cuisines,
      area,
      lastMileTravelString,
      costForTwoString,
      avgRating}=props.resData.data;
    return (<div className="w-[200px] p-2 m-2 shadow-lg bg-slate-400"  style={{ backgroundColor: "#f0f0f0"}}>
    
      <img  className="res-logo" alt="logo"  src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }/>
        <h2 className="font-bold">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
        <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      
    </div>
    );
  }

  export default RestaurantCard;