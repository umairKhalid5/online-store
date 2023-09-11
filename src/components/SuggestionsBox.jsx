import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const SuggestionsBox = ({ items, setSearchTerm }) => {
  return (
    <ul className="suggestions-box absolute top-12 -left-9 -right-20 sm:left-0 sm:right-0 sm:w-full max-h-[80vh] rounded-md overflow-hidden flex flex-col border-2 divide-y-2 overflow-y-auto bg-gray-100">
      <>
        {items.length < 1 ? (
          <li className="flex-1 px-2 py-4 gap-3 hover:bg-blue-50 transition-colors">
            <p className="text-gray-600 font-medium">No matches found!</p>
          </li>
        ) : (
          items.map(item => (
            <Link
              key={item?.image + 'unique'}
              to={`/categories/${item?.category}/${item.id}`}
              onClick={() => setSearchTerm('')}
            >
              <li className="flex-1 px-2 flex py-2 gap-3 items-center hover:bg-blue-50 transition-colors">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="h-16 w-16 rounded-lg object-cover bg-blue-100"
                  opacity
                />
                <div>
                  <p className="text-gray-600 font-medium">{item?.name}</p>
                  <p className="text-orange-600 font-medium text-lg">
                    ${item?.price}
                  </p>
                </div>
              </li>
            </Link>
          ))
        )}
      </>
    </ul>
  );
};

export default SuggestionsBox;
