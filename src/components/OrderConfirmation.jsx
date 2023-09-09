import React from 'react';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../store/cart-slice';

const OrderConfirmation = () => {
  const dispatch = useDispatch();

  const init = () => dispatch(cartSliceActions.confirmOrder());

  return (
    <div className="fixed inset-0 z-[99] bg-black/60">
      <div className="flex flex-col items-center gap-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-50 px-2 py-14 rounded-xl w-[95%] max-w-lg sm:px-3">
        <p className="text-xl font-semibold text-center text-gray-600">
          Order Successfully Placed! 🥳
        </p>
        <p className="text-lg font-medium text-center text-gray-500">
          We'll get in touch with you soon!
        </p>
        <button className="btn" onClick={init}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
