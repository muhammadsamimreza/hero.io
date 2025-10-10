import React, { useEffect, useState } from "react";
import TrendingApps from "./TrendingApps";
import Container from "../components/Container/Container";
import HeroSection from "../components/HeroSection/HeroSection";
import Loader from "./Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(time);
  }, []);
  return (
    <div className="bg-[#e9e9e9] relative min-h-screen">
      {
        isLoading && <Loader></Loader>
      }
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <HeroSection></HeroSection>
        <Container>
          <TrendingApps></TrendingApps>
        </Container>
      </div>
    </div>
  );
};

export default Home;
