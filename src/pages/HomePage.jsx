import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="w-full sm:px-16 px-6 bg-black">
      <div className="w-full flex lg-max-w-[1200px]">
        <Navbar/>
      </div>
      <div className="w-full sm:px-16 px-6">
        <div className="w-full max-w-[1200px]">
          <Hero/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
