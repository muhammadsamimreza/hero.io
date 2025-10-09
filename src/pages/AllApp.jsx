import React, {  useEffect, useState } from "react";
import AppCard from "../components/AppCard/AppCard";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container/Container";
import Loader from "./Loading";

const AllApp = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState('')
  const trimSearch = search.trim().toLowerCase()
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const time = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(time);
    }, []);

 const fillterdeApp = search ? (appData.filter(app=> 
      app.title.trim().toLowerCase().includes(trimSearch)))
      : appData ;
    
  
 
  return (
    <div className="bg-[#e9e9e9] pb-20">
       {
        isLoading && <Loader></Loader>
      }
      <Container className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <div className="text-center space-y-3 pt-5 md:py-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ">Our All Applications</h1>
          <p className="w-[70%] md:w-full mx-auto text-[#627382] text-sm md:text-[16px]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:my-8 px-3 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className=" text-xl font-semibold mb-7 md:mb-0"><p>({fillterdeApp.length}) App Founded</p></div>
          <div className="mb-4 mt-5 md:mt-0 md:mb-0">
            <label value={search} onChange={(e)=> setSearch(e.target.value)} className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input  type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        </div>
          { fillterdeApp.length === 0 ? (
            <div className="flex justify-center text-gray-500 py-20 text-xl font-semibold">
            <h1 className="w-64 mx-auto text-center">No App Found</h1>
          </div>
          ): (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
            {fillterdeApp.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>)}
      </Container>
    </div>
  );
};

export default AllApp;
