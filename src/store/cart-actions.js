import { cartSliceActions } from './cart-slice';
import { uiSliceActions } from './ui-slice';

export const getCartData = () => {
  return async dispatch => {
    dispatch(
      uiSliceActions.toggleAlert({
        msg: 'Looking for previously saved Items',
        alertType: 'info',
      })
    );

    const getData = async () => {
      const res = await fetch(
        'https://brandista-c8004-default-rtdb.firebaseio.com/cart.json'
      );
      const data = await res.json();

      if (!res.ok) throw new Error('Fetching cart data failed');

      return data;
    };

    try {
      const cartData = await getData();

      if (!cartData?.items?.length)
        return dispatch(
          uiSliceActions.toggleAlert({
            msg: 'No items found',
            alertType: 'info',
          })
        );

      dispatch(
        cartSliceActions.replaceCart({
          items: cartData?.items || [],
          totalQuantity: cartData?.totalQuantity,
          totalPrice: cartData?.totalPrice,
        })
      );

      dispatch(
        uiSliceActions.toggleAlert({
          msg: 'Cart Updated!',
          alertType: 'success',
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiSliceActions.toggleAlert({
          msg: 'Fetching Cart Data Failed',
          alertType: 'error',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    if (cart.items.length)
      dispatch(
        uiSliceActions.toggleAlert({
          msg: 'Updating Cart...',
          alertType: 'info',
        })
      );
    else
      dispatch(
        uiSliceActions.toggleAlert({
          msg: 'Emptying Cart...',
          alertType: 'info',
        })
      );

    const sendRequest = async () => {
      const res = await fetch(
        'https://brandista-c8004-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!res.ok) throw new Error('Sending cart data failed');
    };

    try {
      await sendRequest();
      if (cart.items.length)
        dispatch(
          uiSliceActions.toggleAlert({
            msg: 'Cart Updated!',
            alertType: 'success',
          })
        );
      else
        dispatch(
          uiSliceActions.toggleAlert({
            msg: 'Cart Empty Now',
            alertType: 'success',
          })
        );
    } catch (error) {
      // console.log(error);
      dispatch(
        uiSliceActions.toggleAlert({
          msg: `Could not update Cart`,
          alertType: 'error',
        })
      );
    }
  };
};
