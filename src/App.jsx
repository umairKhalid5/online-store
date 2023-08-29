import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

// TODO: start from reading the TODO in Products.jsx

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
            </>
          }
        />
        <Route path="/categories/:category" element={<Products />} />
        <Route path="/categories/:category/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;

// Navbar - Search - Cart
// Hero Slider (swiper.js)
// featured products
// Grid with images for categories
// a section with button to all products and image on the side (like 'Creative harmonious living' on Stefan's store)
// slider CTA with image and sale
// footer
// Add favicon and LOGO

// Try adding filtering functionalities
// Add lazyloading to images
