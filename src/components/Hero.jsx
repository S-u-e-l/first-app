import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-normal text-[75px]">
          THE CRM Software You've
        </h1>
        <h1 className="text-white font-normal text-[75px]">
          Been <span className="text-indigo-500">Looking</span> for...
        </h1>
      </div>
      <div className="text-center max-w-[600px] ">
        <div className="text-slate-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            aspernatur, quam quisquam unde, aliquam distinctio officia nam
            mollitia libero rerum vitae nulla reiciendis dolore eaque sequi
            ducimus. Ex, cum recusandae.
            <br />
            <span className="text-indigo-500">
              Discover the power of CRM software
            </span>{" "}
            now
          </p>
        </div>
      </div>
      <div className="flex py-5">
        <Link className="bg-indigo-500 h-12 w-40 rounded-3xl flex justify-center items-center">
          <p className="text-white">Get Started</p>
        </Link>
        <Link className="h-12 w-40 rounded-3xl flex justify-center items-center">
          <p className="text-white">Talk to Sales</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
