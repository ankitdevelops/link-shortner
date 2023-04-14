import React from "react";
import Qrcode from "./Qrcode";

const Hero = ({ shortUrl }) => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse w-full">
      <Qrcode shortUrl={shortUrl} />
      <div className="text-center sm:text-left">
        <h1 className="sm:text-5xl text-bold leading-loose text-center sm:text-left decoration-black font-bold text-2xl">
          Shrink Your Links and Expand Your Reach with Our Link Shortener App!
        </h1>

        <button className="btn btn-primary btn-wide my-4 capitalize  ">
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default Hero;
