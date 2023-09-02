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

// TODO: Work on Search and AutoComplete Feature!

function App() {
  return (
    <>
      <Navbar />
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

// Search - Cart
// Add favicon and LOGO
