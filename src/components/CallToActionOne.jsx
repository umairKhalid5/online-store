import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionOne = () => {
  return (
    <div className="w-full px-3 py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto flex bg-blue-100 items-center justify-center rounded-lg md:justify-between overflow-hidden">
        {/* Left */}
        <div className="flex flex-col items-center md:w-1/2 text-center px-5 py-10 space-y-5 sm:p-10">
          <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">
            Creative harmonious living
          </h2>
          <p className="max-w-md text-gray-600">
            Brandistic products are all made to standard sizes so that you can
            mix and match them freely.
          </p>
          <Link to="/categories/all" className="btn w-full sm:w-1/2">
            Shop Now
          </Link>
        </div>

        {/* Right */}
        <div className="hidden md:flex md:w-1/2">
          <img src="/images/cta/lifestyle.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionOne;
