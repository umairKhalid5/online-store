import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Navbar,
  Hero,
  Products,
  ProductDetails,
  CallToActionOne,
  ItemsSlider,
  CallToActionTwo,
  GridMenu,
  Footer,
  Cart,
  DetailsForm,
  OrderConfirmation,
} from './components';
import { getCartData, sendCartData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const isOrdered = useSelector(state => state.cart.isOrdered);

  const showCart = useSelector(state => state.cart.cartVisibility);
  const showAlert = useSelector(state => state.ui.showAlert);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    if (cart.isChanged || isOrdered)
      dispatch(
        sendCartData({
          items: cartItems,
          totalQuantity,
          totalPrice,
        })
      );
  }, [cart.isChanged, cartItems, totalQuantity, totalPrice]);

  return (
    <>
      {showAlert && <Alert />}
      <Navbar />
      {showCart && <Cart />}
      {isOrdered && <OrderConfirmation />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products title={'Featured'} />
              <CallToActionOne />
              <ItemsSlider />
              <CallToActionTwo />
              <GridMenu />
            </>
          }
        />
        <Route path="/categories/:category" element={<Products />} />
        <Route path="/categories/:category/:id" element={<ProductDetails />} />

        {!isOrdered && <Route path="/checkout" element={<DetailsForm />} />}

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// TODO: Add SearchFeed.jsx. Add search icon within the input element.
