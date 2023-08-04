import React from "react";

const Shimmer = () => {
  return (
    <div className="p-2 mx-2 my-5 w-full  shadow-lg flex flex-wrap">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="rounded-xl w-64 h-64 bg-gray-200 m-2 animate-pulse" />
      ))}
    </div>
  );
};

export default Shimmer;
