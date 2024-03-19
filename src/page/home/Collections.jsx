import React from "react";

const Collections = () => {
  return (
    <div className='bg-[url("https://github.com/shivamm-55/CORAL-Shopping-Site/blob/main/public/images/collection-bg.png?raw=true")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20 '>
      <div className="h-[580px] flex justify-between items-center md:flex-row">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="images/zara-logo.png" alt="" />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
            Chic and Elegant: Explore Zara's Latest Evening Wear Collection, Exclusively Available Now!
          </p>
          <button className="bg-white text-Black font-semibold px-6 py-2 capitalize rounded-sm hover:-translate-y-2 transition-all duration-300">
            See Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
