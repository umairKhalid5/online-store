import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionTwo = () => {
  return (
    <div className="w-full px-3 py-16 bg-slate-50 relative">
      <div className="max-w-7xl p-2 mx-auto bg-orange-600 text-white flex flex-col gap-3 items-center justify-between rounded-lg overflow-hidden sm:px-10 sm:py-20 lg:flex-row">
        {/* Left */}
        <div className="text-gray-200 w-full flex flex-col gap-5 p-2 text-center lg:text-left lg:w-2/5 relative z-10">
          <p>30% OFF</p>
          <h2 className="text-4xl font-bold uppercase lg:max-w-xs sm:text-7xl">
            FINE SMILE
          </h2>
          <p className="text-gray-200">Nov 3 to Dec 12</p>
        </div>

        {/* Right */}
        <div className="w-full flex flex-col p-2 gap-5 text-center items-center lg:text-left lg:w-2/5 lg:items-start relative z-10">
          <h2 className="text-3xl font-bold sm:text-5xl bg-white text-orange-600 p-2 rounded-md">
            Summer Sale
          </h2>
          <p className="max-w-md text-gray-200 text-sm">
            company that's grown from 270 to 480 employees in the last 12
            months.
          </p>
          <Link
            to="/categories/all"
            className="btn w-full bg-gray-700 text-white border-gray-700 shadow-lg hover:text-orange-600 hover:bg-white sm:px-10 sm:w-max"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="absolute w-full top-0 left-0 flex items-center justify-center lg:w-[87%]">
        <img
          src="images/cta/cta-headphone.webp"
          alt="headphone"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CallToActionTwo;
