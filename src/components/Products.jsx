import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import {
  headphones,
  shoes,
  garments,
  furniture,
  featured,
  allProducts,
} from '../constants/constants';
import ProductBox from './ProductBox';

const Products = ({ title }) => {
  const params = useParams();

  const categoriesArr = ['headphones', 'shoes', 'furniture', 'garments', 'all'];

  let productsToDisplay = [];
  if (params.category === 'headphones') productsToDisplay = headphones;
  if (params.category === 'shoes') productsToDisplay = shoes;
  if (params.category === 'furniture') productsToDisplay = furniture;
  if (params.category === 'garments') productsToDisplay = garments;
  if (params.category === 'all') productsToDisplay = allProducts;
  if (title === 'Featured') productsToDisplay = featured;

  const category = productsToDisplay[0]?.category;

  return (
    <div className="w-full px-3 py-10 bg-white">
      <div className="max-w-7xl mx-auto relative space-y-3">
        {/* Filter Options */}
        {/* // TODO: Continue working on these chips. Update results upon clicking on these chips */}
        {params.category && (
          <div className="flex flex-row gap-5 items-center justify-center mb-6">
            {categoriesArr.map((cat, i) => (
              <span
                key={cat + i}
                className={`chip ${
                  params.category === cat && 'bg-orange-600 text-white'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        )}
        <h3 className="capitalize">
          {title
            ? title + ' Products'
            : params.category === 'all'
            ? 'All Products'
            : params.category}
        </h3>
        <div className="flex flex-wrap gap-6 justify-center items-center px-2 py-4 sm:px-4">
          {/* Products */}
          {productsToDisplay[1].products.length > 0 &&
            productsToDisplay[1]?.products.map((item, i) => (
              <ProductBox
                key={item?.image + i}
                item={item}
                category={category}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
