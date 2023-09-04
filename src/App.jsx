import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import CallToActionOne from './components/CallToActionOne';
import ItemsSlider from './components/ItemsSlider';
import CallToActionTwo from './components/CallToActionTwo';
import GridMenu from './components/GridMenu';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

function App() {
  const cartItems = useSelector(state => state.cart.items);
  const showCart = useSelector(state => state.cart.cartVisibility);

  return (
    <>
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// TODO: Add scrollY to list (cartItems ul List) in Cart. Add delete, + & - buttons for each item in Cart.jsx. Add removeItemsFromCart function. Add an Alert when an item is added or deleted to/from cart. Finally add Firebase backend.
// Add SearchFeed.jsx. Add search icon within the input element.
// Add favicon and LOGO
