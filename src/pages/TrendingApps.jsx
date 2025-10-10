import React from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "../components/AppCard/AppCard";
import { Link } from "react-router";
import { FaArrowTrendUp } from "react-icons/fa6";

const TrendingApps = () => {
  const { appData } = useAppData();
  const trendData = appData.slice(0, 8);

  return (
    <div>
      <div className="">
        <div className="text-center space-y-3 py-10">
          <h1 className="text-3xl font-bold flex items-center gap-2 justify-center"><span>Trending Apps</span> <span><FaArrowTrendUp /></span></h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {trendData.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="py-10 flex justify-center">
          <Link
            to="/allapp"
            className="btn w-48 bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-white hover:scale-102 transition transform"
          >
            {" "}
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
