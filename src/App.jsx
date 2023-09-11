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
  SearchFeed,
  ScrollTopBtn,
  ScrollToTop,
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

      <ScrollToTop>
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
          <Route
            path="/categories/:category/:id"
            element={<ProductDetails />}
          />

          <Route path="/checkout" element={<DetailsForm />} />

          <Route path="/search/:searchTerm" element={<SearchFeed />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ScrollToTop>

      <Footer />
      <ScrollTopBtn />
    </>
  );
}

export default App;
