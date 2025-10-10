import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getFromLocalStorage } from "../Utilities/AddToLocalStorage";
import useAppData from "../Hooks/useAppData";
import InstalledCard from "./InstalledCard";
import Loader from "./Loading";

const Instalation = () => {
  const { appData } = useAppData();
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState("none");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(time);
  }, []);


  useEffect(() => {
    const savedAppLocal = getFromLocalStorage() || [];

    if (!savedAppLocal.length || !appData || !appData.length) return;

    const filteredApp = appData.filter((app) =>
      savedAppLocal.map(Number).includes(app.id)
    );

    setInstalledApp(filteredApp);
  }, [appData]);

  const handleSort = (type) => {
    setSort(type);
    let sortedApp = [...installedApp];

    const parseDownloads = (str) => {
      if (str.endsWith("M")) return parseFloat(str) * 1_000_000;
      return Number(str);
    };

    if (type === "Low-High") {
      sortedApp.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (type === "High-Low") {
      sortedApp.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }
    setInstalledApp(sortedApp);
  };
  const handleUninstallApp = (id) => {
    setInstalledApp((prev) => prev.filter((app) => app.id !== id));
  };
  return (
    <div className="bg-[#e9e9e9] pb-20 relative">
      {
        isLoading && <Loader></Loader>
      }
      <Container className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <div className="md:py-10">
          <div className="text-center space-y-3 pt-5 md:py-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ">
              All Installed Apps
            </h1>
            <p className="w-[70%] md:w-full mx-auto text-[#627382] text-sm md:text-[16px]">
              Explore All Apps on the Market developed by us.
            </p>
          </div>
          <div>
            <div className="my-3 md:my-8 px-3 flex justify-between items-center">
              <div className="md:text-xl font-semibold">
                <p>Installed Apps ({installedApp.length})</p>
              </div>
              <div>
                <details className="dropdown">
                  <summary className="btn m-1 w-40">sort by: {sort} </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 space-y-3 w-42 p-2 shadow-sm">
                    <li
                      onClick={() => handleSort("High-Low")}
                      className="hover:cursor-pointer"
                    >
                      High-Low
                    </li>
                    <li
                      onClick={() => handleSort("Low-High")}
                      className="hover:cursor-pointer"
                    >
                      Low-High
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div>
          {installedApp.map((app) => (
            <InstalledCard
              key={app.id}
              app={app}
              handleUninstallApp={handleUninstallApp}
            ></InstalledCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instalation;
