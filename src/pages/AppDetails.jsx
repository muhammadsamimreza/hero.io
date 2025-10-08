import React from "react";
import { useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";
import downlowdIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { appData } = useAppData();
  const appId = Number(id);

  const data = appData.find((data) => data.id === appId) || {};

  const {title, image, ratingAvg,downloads,reviews} = data;
 
  
  

  return (
    <div>
      <Container>
        <div className="flex items-center gap-20 my-5 p-3 bg-base-200 rounded-2xl">
          <div className="w-44 h-60 bg-gray-300 rounded-2xl">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
          <div className="space-y-3">
            <div className="space-y-2 border-b border-gray-300 pb-5">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-xl ">
                <span className="text-gray-400">Develop by:</span>
                <span className="font-medium bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text"> Epic Planner</span>
              </p>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <img className="w-7" src={downlowdIcon} alt="" />
                <div iv className="my-2">
                  <p className="text-[#7f8488] text-sm">Download</p>
                  <h1 className="text-[27px] font-bold">{downloads}</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-7" src={ratingsIcon} alt="" />
                <div iv className="my-2">
                  <p className="text-[#7f8488] text-sm">Average Ratings</p>
                  <h1 className="text-[27px] font-bold">{ratingAvg}</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-7" src={reviewIcon} alt="" />
                <div iv className="my-2">
                  <p className="text-[#7f8488] text-sm">Total Review</p>
                  <h1 className="text-[27px] font-bold">{reviews}</h1>
                </div>
              </div>
            </div>
            <div>
              <button className="btn bg-teal-400 text-white font-semibold">
                Instal Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
