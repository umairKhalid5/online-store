import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../store/cart-slice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import Image from './Image';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const itemsCount = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  console.log(cartItems);

  const hideCart = () => dispatch(cartSliceActions.toggleCartVisibility());

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 w-full bottom-0 px-3 py-10 bg-black/60 z-50 flex items-center justify-between"
        onClick={hideCart}
      ></div>

      {cartItems.length === 0 && (
        <div className="max-w-[98%] mx-auto fixed inset-0 top-10 bottom-10 flex items-center flex-col gap-5 justify-center rounded-lg overflow-hidden bg-white px-3 py-2 z-[60] sm:max-w-3xl">
          <div
            className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors duration-200"
            onClick={hideCart}
          >
            <CloseIcon sx={{ fontSize: '2rem' }} />
          </div>
          <p className="font-medium text-gray-500 text-2xl sm:text-4xl">
            Cart Empty!
          </p>
          <button className="btn" onClick={hideCart}>
            Continue Shopping
          </button>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mx-auto fixed left-1 right-1 top-[50%] -translate-y-[50%] rounded-lg overflow-hidden bg-white px-5 py-8 z-[60] sm:max-w-3xl">
          <div className="flex flex-col gap-5">
            {/* Back */}
            <div className="font-medium flex w-full gap-1 items-center">
              <div
                className="cursor-pointer text-gray-600 hover:text-orange-600 transition-colors duration-200"
                onClick={hideCart}
              >
                <ArrowBackIosIcon />
              </div>
              Your Cart:
              <span className="text-orange-600 ml-px">({itemsCount})</span>
            </div>

            {/* Items */}
            <ul className="suggestions-box max-h-[80vh] w-full rounded-md overflow-hidden flex flex-col items-center justify-between gap-3 overflow-y-auto">
              {cartItems.map(item => (
                <li
                  key={item?.image}
                  className="w-full px-2 flex py-2 gap-3 justify-between border rounded-md border-gray-400 bg-gray-100 hover:bg-blue-50 transition-colors"
                >
                  {/* :Left */}
                  <div className="flex gap-3">
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      className="h-14 w-14 rounded-lg object-cover bg-blue-100 sm:h-24 sm:w-24"
                      opacity
                    />
                    <div>
                      <p className="text-gray-600 font-medium sm:text-lg">
                        {item?.name}
                      </p>
                      <p className="text-orange-500 font-medium sm:text-lg">
                        (${item?.price})
                      </p>
                      <p className="text-orange-500 font-medium sm:text-lg">
                        Add + and - Buttons
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-3 items-center">
                    <p className="text-orange-600 font-semibold text-lg sm:text-xl">
                      ${item.quantity * item.price}
                    </p>
                    <p className="text-gray-800 font-semibold text-lg sm:text-xl">
                      {item?.quantity}-Add DELETE button here
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col items center gap-3">
              <div className="flex justify-between items-center gap-3 border-b py-2">
                <p className="text-gray-800 font-semibold text-xl sm:text-2xl">
                  Total Price
                </p>
                <p className="text-orange-600 font-semibold text-xl sm:text-3xl">
                  ${totalPrice}
                </p>
              </div>
              <div className="flex justify-end items-center gap-3 py-2 w-full">
                <button
                  className="btn bg-gray-700 border-gray-700 hover:text-gray-700"
                  onClick={hideCart}
                >
                  Go Back
                </button>
                <button className="btn ">Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
