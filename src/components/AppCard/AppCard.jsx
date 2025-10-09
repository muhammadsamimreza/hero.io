import React from "react";
import { Link } from "react-router";
import downloadImg from "../../assets/icon-downloads.png"
import ratingsImg from "../../assets/icon-ratings.png"


const AppCard = ({app}) => {
  const { title,ratingAvg,downloads, image,id } = app;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="h-80 bg-green-50 shadow-md rounded-lg p-3 hover:scale-105 transition transform">
        <div className="bg-gray-400 w-60 h-[70%] overflow-hidden rounded-lg">
          <img src={image} className="w-full h-full object-cover overflow-hidden border-2 border-green-100 rounded-lg"  alt="" />
        </div>
        <div className="my-4 space-y-2">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex justify-between ">
            <p className="flex gap-2 items-center bg-green-100 px-3 py-1 font-bold rounded-xl text-green-600">
              <span><img className="w-4" src={downloadImg} alt="" /></span> {downloads}</p>
            <p className="flex gap-2 items-center bg-amber-50 px-3 py-1 font-bold rounded-xl text-amber-500">
              <span><img className="w-4" src={ratingsImg} alt="" /></span> {ratingAvg}</p>
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
