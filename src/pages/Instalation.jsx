import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getFromLocalStorage } from "../Utilities/AddToLocalStorage";
import useAppData from "../Hooks/useAppData";
import InstalledCard from "./InstalledCard";

const Instalation = () => {
  const { appData } = useAppData();
  const [installedApp, setInstalledApp] = useState([]);

  useEffect(() => {
     const savedAppLocal = getFromLocalStorage() || [];

    if (!savedAppLocal.length || !appData || !appData.length) return;

    const filteredApp = appData.filter(app =>
      savedAppLocal.map(Number).includes(app.id)
    );

    setInstalledApp(filteredApp);
   
  }, [appData]);

 console.log(installedApp)
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-3xl font-bold text-center">All Instaled Apps</h1>
        </div>
        <div>
           {
            installedApp.map(app=> <InstalledCard app={app}></InstalledCard>)
           }
        </div>
      </Container>
    </div>
  );
};

export default Instalation;