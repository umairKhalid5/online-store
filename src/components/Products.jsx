import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  headphones,
  shoes,
  garments,
  furniture,
  featured,
  allProducts,
} from '../constants/constants';
import { useDispatch } from 'react-redux';
import { productSliceActions } from '../store/product-slice';

const Products = ({ title }) => {
  const params = useParams();
  const dispatch = useDispatch();

  let productsToDisplay = [];
  if (params.category === 'headphones') productsToDisplay = headphones;
  if (params.category === 'shoes') productsToDisplay = shoes;
  if (params.category === 'furniture') productsToDisplay = furniture;
  if (params.category === 'garments') productsToDisplay = garments;
  if (params.category === 'all') productsToDisplay = allProducts;
  if (title === 'Featured') productsToDisplay = featured;

  const category = productsToDisplay[0]?.category;

  const onProductClickHandler = item => {
    dispatch(productSliceActions.selectItem(item));
  };

  return (
    <div className="w-full px-3 py-10 bg-white">
      <div className="max-w-screen-2xl mx-auto relative space-y-3">
        <h3 className="capitalize">
          {title
            ? title + ' Products'
            : params.category === 'all'
            ? 'All Products'
            : params.category}
        </h3>

        <div className="flex flex-wrap gap-6 justify-center items-center px-2 py-4 sm:px-4">
          {/* Products */}
          {productsToDisplay.length > 0 &&
            productsToDisplay[1]?.products.map((item, i) => (
              <Link
                key={item?.image + i}
                to={`/categories/${category}/${item?.id}`}
                onClick={() => onProductClickHandler(item)}
              >
                <div className="bg-gray-100 border w-[280px] min-w-[100%] border-gray-300 rounded-lg shadow-md p-2 flex flex-col items-center space-y-3 cursor-pointer hover:bg-orange-200 hover:scale-110 duration-500 ease-out">
                  {/* Image */}
                  <div className="w-full h-[270px] rounded-lg overflow-hidden">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="h-px w-full bg-gray-200"></div>

                  {/* Name & Price */}
                  <div className="flex flex-col w-full text-center sm:text-left">
                    <h5 className="font-medium text-gray-600">{item?.name}</h5>
                    <p className="text-xl font-semibold text-orange-600">
                      ${item?.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
