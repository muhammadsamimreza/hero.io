import React from "react";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";
import AppCard from "../components/AppCard/AppCard";

const TrendingApps = () => {
  const { appData } = useAppData();
  const trendData = appData.slice(0,8);
 

  return (
    <div>
      
        <div className="">
          <div className="text-center space-y-3 py-10">
            <h1 className="text-3xl font-bold ">TrendingApps</h1>
            <p className="text-[#627382]">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
                {
                    trendData.map(app=> <AppCard key={app.id} app={app}></AppCard>)
                }
          </div>
        </div>
    
    </div>
  );
};

export default TrendingApps;
