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
} from './components';
import { getCartData, sendCartData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const showCart = useSelector(state => state.cart.cartVisibility);
  const showAlert = useSelector(state => state.ui.showAlert);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    if (cart.isChanged)
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

        <Route path="/checkout" element={<DetailsForm />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// TODO: Start working on personal info & shipping details form. Set Cart back to its initial state upon successful order placement.
// TODO: Add SearchFeed.jsx. Add search icon within the input element.
// TODO: Add favicon and LOGO
