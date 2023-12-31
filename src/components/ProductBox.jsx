import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image.jsx';

const ProductBox = ({ item, category, noZoom }) => {
  return (
    <Link to={`/categories/${category}/${item?.id}`}>
      <div
        className={`group product-box bg-gray-50 border min-w-[100%] border-gray-200 rounded-lg shadow-md p-2 flex flex-col items-center space-y-3 cursor-pointer hover:bg-blue-100 ${
          !noZoom && 'sm:hover:scale-110'
        } duration-500 ease-out`}
      >
        {/* Image */}
        <div className="image-container w-full h-[270px] rounded-lg overflow-hidden bg-gray-50">
          <Image
            src={item?.image}
            alt={item?.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="h-px w-full bg-gray-200 group-hover:bg-blue-200 duration-200"></div>

        {/* Name & Price */}
        <div className="flex flex-col w-full text-center sm:text-left">
          <h5 className="font-medium text-gray-700">{item?.name}</h5>
          <p className="text-xl font-semibold text-orange-600">
            ${item?.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
