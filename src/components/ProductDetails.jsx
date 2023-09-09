import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { allMainProducts } from '../constants/constants';
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../store/cart-slice';
import { uiSliceActions } from '../store/ui-slice';
import { sendCartData } from '../store/cart-actions';

const ProductDetails = () => {
  window.scrollTo({ top: 0, left: 0 });

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [imgSrc, setImgSrc] = useState(null);
  const [itemsCount, setItemsCount] = useState(1);

  const selectedItem = allMainProducts[1]?.products?.filter(
    item => item.id === params?.id
  )[0];

  const thumbs = [
    selectedItem.image,
    ...Object.values(selectedItem.otherImages[0]),
  ];

  const updateImage = src => setImgSrc(src);

  const updateItemsCount = dir => {
    if (dir === 'add') setItemsCount(prev => (prev += 1));
    if (itemsCount < 1) return;
    if (dir === 'remove' && itemsCount > 1) setItemsCount(prev => (prev -= 1));
  };

  const addToCart = item =>
    dispatch(cartSliceActions.addItemToCart({ ...item, quantity: itemsCount }));

  const buyNow = item => {
    dispatch(cartSliceActions.addItemToCart({ ...item, quantity: itemsCount }));
    navigate('/checkout');
  };

  return (
    <div className="w-full py-10 flex items-center take-screen">
      <div className="max-w-7xl mx-auto px-3 p-2 gap-8 flex-1 flex flex-col start justify-between md:gap-5 md:p-5 md:flex-row">
        {/* Left - Images */}
        <div className="w-full flex flex-col space-y-3 md:w-1/3">
          {/* Main Image */}
          <div className="image-container w-full aspect-square bg-gray-100 rounded-lg overflow-hidden hover:bg-blue-100 duration-500 ease-out">
            <Image
              src={imgSrc || selectedItem.image}
              alt={selectedItem.name}
              className="object-cover w-full h-full"
            />
            {/* <img
              src={imgSrc || selectedItem.image}
              alt={selectedItem.name}
              className="object-cover w-full h-full"
            /> */}
          </div>

          {/* Thumbs */}
          <div className="flex flex-row items-center space-x-3 justify-center overflow-hidden">
            {thumbs.map((img, i) => (
              <div
                key={i}
                className={`image-container w-20 aspect-square ${
                  imgSrc === img
                    ? 'bg-blue-100 opacity-100'
                    : imgSrc === null && i === 0
                    ? 'bg-blue-100 opacity-100'
                    : 'bg-gray-100 opacity-60'
                } rounded-lg cursor-pointer p-[2px] hover:bg-blue-100 duration-500 ease-out`}
                onMouseOver={() => updateImage(img)}
              >
                <Image
                  src={img}
                  alt={selectedItem.name}
                  className="object-cover w-full h-full rounded-md"
                  opacity
                />
                {/* <img
                  src={img}
                  alt={selectedItem.name}
                  className="object-cover w-full h-full rounded-md"
                /> */}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-gray-700 text-2xl font-semibold sm:text-4xl">
            {selectedItem?.name}
          </h2>

          {/* Details */}
          <div className="space-y-1">
            <p className="text-gray-600 text-xl font-medium">Details:</p>
            <p className="text-gray-400">{selectedItem?.desc}</p>
          </div>

          {/* Price */}
          <div>
            <p className="text-3xl text-red-600 font-medium tracking-tight mt-7">
              ${selectedItem?.price * itemsCount}
            </p>
          </div>

          {/* Add To Cart & "+" "-" Buttons*/}
          <div className="flex items-center flex-col justify-center gap-5 text-gray-600 text-xl font-medium md:justify-normal sm:flex-row">
            <p>Quantity:</p>
            <span className="quantity border-2 rounded-md">
              <button
                className="border-r-2 text-red-400 bg-gray-50 hover:bg-blue-100 duration-200"
                onClick={() => updateItemsCount('remove')}
              >
                -
              </button>
              <span>{itemsCount}</span>
              <button
                className="border-l-2 text-green-400 bg-gray-50 hover:bg-blue-100 duration-200"
                onClick={() => updateItemsCount('add')}
              >
                +
              </button>
            </span>
          </div>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="flex flex-col gap-5 items-center justify-center sm:flex-row md:justify-normal">
            <button
              className="btn w-full mt-3 bg-white text-gray-700 border-gray-600 shadow-md hover:text-white hover:bg-gray-700 sm:w-1/3"
              onClick={() => addToCart(selectedItem)}
            >
              Add to Cart
            </button>
            <button
              className="btn w-full sm:w-1/3"
              onClick={() => buyNow(selectedItem)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
