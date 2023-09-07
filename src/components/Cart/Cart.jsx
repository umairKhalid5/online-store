import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../../store/cart-slice';
import Image from '../Image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { sendCartData } from '../../store/cart-actions';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);
  const cart = useSelector(state => state.cart);
  const itemsCount = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  // console.log(cartItems);

  const hideCart = () => dispatch(cartSliceActions.toggleCartVisibility());

  const updateCart = (dir, item) => {
    if (dir === 'add')
      dispatch(cartSliceActions.addItemToCart({ ...item, quantity: 1 }));

    if (itemsCount < 1) return;
    if (dir === 'remove')
      dispatch(cartSliceActions.removeItemFromCart({ ...item, quantity: 1 }));

    if (dir === 'deleteItem') dispatch(cartSliceActions.removeProduct(item));
  };

  const saveData = () => {
    dispatch(cartSliceActions.toggleCartVisibility());
    navigate('/checkout');
    // dispatch(
    //   sendCartData({
    //     items: cartItems,
    //     totalQuantity: itemsCount,
    //     totalPrice,
    //   })
    // );
  };

  // useEffect(() => {
  //   console.log(cart);
  //   if (cart.isChanged && cartItems.length === 0) {
  //     dispatch(
  //       sendCartData({
  //         items: cartItems,
  //         totalQuantity: itemsCount,
  //         totalPrice,
  //       })
  //     );
  //     dispatch(cartSliceActions.resetCart());
  //   }
  // }, [cart.isChanged, cartItems.length, dispatch]);

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
        <div className="mx-auto fixed left-1 right-1 top-[50%] -translate-y-[50%] rounded-lg overflow-hidden bg-white px-1 py-4 z-[60] sm:px-5 sm:py-8 sm:max-w-3xl">
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
            <ul className="suggestions-box max-h-96 w-full rounded-md overflow-hidden flex flex-col items-center justify-between gap-3 overflow-y-auto">
              {cartItems.map(item => (
                <li
                  key={item?.image}
                  className="w-full px-1 flex py-2 gap-3 justify-between border rounded-md border-gray-400 bg-gray-100 hover:bg-blue-50 transition-colors sm:px-2"
                >
                  {/* :Left */}
                  <div className="flex gap-1 items-center sm:gap-3">
                    <Link
                      to={`/categories/${item?.category}/${item?.id}`}
                      onClick={hideCart}
                    >
                      <Image
                        src={item?.image}
                        alt={item?.name}
                        className="h-20 w-20 rounded-lg object-cover bg-blue-100 sm:h-24 sm:w-24"
                        opacity
                      />
                    </Link>
                    <div className="flex flex-col items-start space-y-1">
                      <Link to={`/categories/${item?.category}/${item?.id}`}>
                        <p
                          className="text-gray-600 font-medium sm:text-lg"
                          onClick={hideCart}
                        >
                          {item?.name}
                        </p>
                      </Link>
                      <p className="text-orange-500 font-medium sm:text-lg">
                        (${item?.price})
                      </p>
                      {/* Add To Cart & "+" "-" Buttons*/}
                      <div className="flex flex-col gap-1 text-gray-600 font-medium md:justify-normal sm:flex-row sm:items-center">
                        <span className="cart-quantity border-2 rounded-md">
                          <button
                            className="border-r-2 text-red-400 bg-gray-50 hover:bg-orange-100 duration-200"
                            onClick={() => updateCart('remove', item)}
                          >
                            -
                          </button>
                          <span>{item?.quantity}</span>
                          <button
                            className="border-l-2 text-green-400 bg-gray-50 hover:bg-orange-100 duration-200"
                            onClick={() => updateCart('add', item)}
                          >
                            +
                          </button>
                        </span>
                      </div>
                      {/* <p className="text-orange-500 font-medium sm:text-lg">
                        Add + and - Buttons
                      </p> */}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-3 items-end justify-between">
                    <div
                      className="font-semibold text-lg sm:text-xl text-orange-600 cursor-pointer"
                      onClick={() => updateCart('deleteItem', item)}
                    >
                      {/* {item?.quantity}-Add DELETE button here */}
                      <DeleteOutlinedIcon sx={{ fontSize: '1.8rem' }} />
                    </div>
                    <p className="text-orange-600 font-semibold text-lg sm:text-xl">
                      ${item.quantity * item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col items center gap-3">
              <div className="flex justify-end items-center gap-3 border-b sm:py-2">
                <p className="text-gray-800 font-semibold text-xl sm:text-2xl">
                  Subtotal:
                </p>
                <p className="text-orange-600 font-semibold text-xl sm:text-3xl">
                  ${totalPrice}
                </p>
              </div>
              <div className="flex justify-end items-center gap-3 py-2 w-full">
                <button
                  className="btn px-3 py-2 bg-gray-700 border-gray-700 hover:text-gray-700 sm:px-4 sm:py-3"
                  onClick={hideCart}
                >
                  Go Back
                </button>
                <button
                  className="btn px-3 py-2 sm:px-4 sm:py-3"
                  onClick={saveData}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
