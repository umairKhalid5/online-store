import React from 'react';

const GridMenu = () => {
  return (
    <div className="w-full px-3 py-10 bg-white">
      <div className="max-w-7xl mx-auto gap-3 grid grid-rows-2 grid-cols-2 md:grid-cols-4">
        <div className="md:row-span-2 md:col-start-1 md:col-span-2">
          <img
            src="/images/hero/bg.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:col-start-3 md:row-span-2 bg-red-100">
          <img
            src="/images/hero/bg1.jpg"
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="md:col-start-4 md:row-start-1">
          <img
            src="/images/hero/bg2.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:col-start-4">
          <img
            src="/images/hero/bg3.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GridMenu;
