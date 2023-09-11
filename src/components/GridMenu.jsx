import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const GridMenu = () => {
  const imgClasses = 'w-full h-full object-cover rounded-lg';

  return (
    <div className="w-full px-3 py-10 bg-white">
      <div className="grid-menu max-w-7xl sm:h-[500px] mx-auto gap-3 grid grid-rows-2 grid-cols-2 lg:grid-cols-4">
        <Link
          to="/categories/headphones"
          className="image-container lg:row-span-2 lg:col-start-1 lg:col-span-2"
        >
          <Image
            src="/images/grid/headphone.jpg"
            alt="headphone"
            className={imgClasses}
            opacity
          />
          <h2>Headphones</h2>
        </Link>
        <Link
          to="/categories/shoes"
          className="image-container lg:col-start-3 lg:row-span-2 bg-red-100"
        >
          <Image
            src="/images/grid/shoes.jpg"
            alt="shoes"
            className={imgClasses}
            opacity
          />
          <h2>Shoes</h2>
        </Link>
        <Link
          to="/categories/furniture"
          className="image-container lg:col-start-4 lg:row-start-1"
        >
          <Image
            src="/images/grid/furniture.jpg"
            alt="furniture"
            className={imgClasses}
            opacity
          />
          <h2>Furniture</h2>
        </Link>
        <Link
          to="/categories/garments"
          className="image-container lg:col-start-4"
        >
          <Image
            src="/images/grid/garments.jpg"
            alt="garments"
            className={imgClasses}
            opacity
          />
          <h2>Garments</h2>
        </Link>
      </div>
    </div>
  );
};

export default GridMenu;
