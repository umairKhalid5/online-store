import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allMainProducts } from '../constants/constants';
import ProductBox from './ProductBox';

const SearchFeed = () => {
  const params = useParams();
  const { searchTerm } = params;

  const [items, setItems] = useState('');

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const product = allMainProducts[1]?.products?.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setItems(product);
  }, [allMainProducts, searchTerm]);

  return (
    <div className="w-full px-3 py-10 bg-white take-screen">
      <div className="max-w-7xl mx-auto relative space-y-3">
        <h2 className="text-gray-600 text-xl font-semibold text-center sm:text-left sm:text-4xl">
          Search results for{' '}
          <span className="text-orange-600">"{searchTerm}"</span>:
        </h2>

        {/* Products */}
        {!items.length ? (
          <p className="text-gray-600 font-medium text-lg text-center sm:text-left sm:text-xl">
            No matches found!
          </p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center items-center px-2 py-4 sm:px-4">
            {items?.map((item, i) => (
              <ProductBox
                key={item?.image + i}
                item={item}
                category={item.category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFeed;
