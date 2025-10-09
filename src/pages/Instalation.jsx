import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getFromLocalStorage } from "../Utilities/AddToLocalStorage";
import useAppData from "../Hooks/useAppData";
import InstalledCard from "./InstalledCard";


const Instalation = () => {
  const { appData } = useAppData();
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState("none");

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
    <div className="bg-[#e9e9e9] pb-20">
      <Container>
        <div className="py-10">
          <div className="py-5 space-y-2">
            <h1 className="text-3xl font-bold text-center">
              All Instaled Apps
            </h1>
            <p className="text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div>
            <div className="my-8 px-3 flex justify-between items-center">
              <div className="text-xl font-semibold">
                <p>({installedApp.length}) App Founded</p>
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
              onUninstall={handleUninstallApp}
            ></InstalledCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instalation;
