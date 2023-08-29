import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { headphones } from '../constants/constants';

const Products = ({ title }) => {
  const params = useParams();

  // const productsToDisplay = params.category === 'headphones' && headphones;
  const productsToDisplay = headphones;

  const category = productsToDisplay[0]?.category;

  const onProductClickHandler = item => {
    // TODO: Create a state in redux store for the currently selected item, and update that state here. Use that state to render the product details on ProductDetails page.
    console.log(item);
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
          {productsToDisplay[1]?.products.map(item => (
            <Link
              key={item?.image}
              to={`/categories/${category}/${item?.id}`}
              onClick={() => onProductClickHandler(item)}
            >
              <div className="bg-gray-100 border max-w-[280px] min-w-[100%] border-gray-300 rounded-lg shadow-md p-2 flex flex-col items-center space-y-3 cursor-pointer hover:bg-orange-200 hover:scale-110 duration-500 ease-out">
                {/* Image */}
                <img src={item?.image} alt={item?.name} className="w-3/4" />
                {/* Name */}
                <div className="flex flex-col w-full">
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
