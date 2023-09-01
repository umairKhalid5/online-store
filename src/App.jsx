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

// TODO: Work on Grid!

function App() {
  return (
    <div className="pb-14">
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
    </div>
  );
}

export default App;

// Navbar - Search - Cart
// Hero Slider (swiper.js)
// featured products
// a section with button to all products and image on the side (like 'Creative harmonious living' on Stefan's store)
// Trending Now Products Slider
// Grid with images for categories
// CTA Sale 30% OFF
// footer
// Add favicon and LOGO

// Try adding filtering and sorting functionalities
// Add lazyloading to images
