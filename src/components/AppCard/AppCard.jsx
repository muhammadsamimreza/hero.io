import React from "react";

const AppCard = ({app}) => {
  const { title,ratingAvg,downloads } = app;
  return (
    <div>
      <div className="w-60 h-72 bg-white border rounded-lg p-3">
        <div className="bg-gray-400 w-full h-[70%] rounded-lg">
          <img src='' alt="" />
        </div>
        <div className="my-4 space-y-2">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex justify-between">
            <p>{downloads}</p>
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
