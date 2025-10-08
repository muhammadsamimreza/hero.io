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

  const data = appData.find((data) => data.id === appId);

  console.log(data);

  return (
    <div>
      <Container>
        <div className="flex items-center gap-20">
          <div className="w-44 h-60 bg-gray-300 rounded-2xl">img</div>
          <div className="space-y-3">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">This is Home Planner</h1>
              <p>
                <span className="text-gray-400">Develop by:</span>
                <span>Epic Planner</span>
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <img className="w-8" src={downlowdIcon} alt="" />
                <div iv className="my-2">
                  <p className="text-[#001931]">Download</p>
                  <h1 className="text-3xl font-bold">8M</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-8" src={ratingsIcon} alt="" />
                <div iv className="my-2">
                  <p className="text-[#001931]">Average Ratings</p>
                  <h1 className="text-3xl font-bold">4.9</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-8" src={reviewIcon} alt="" />
                <div iv className="my-2">
                  <p className="text-[#001931]">Total Review</p>
                  <h1 className="text-3xl font-bold">57K</h1>
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
