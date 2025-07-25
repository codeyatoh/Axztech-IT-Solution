import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/home/home';
import Contact from '../components/pages/contact/contact';
import Products from '../components/pages/products/products';
import AboutUs from '../components/pages/aboutUs/aboutUs';

function AppRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
}

export default AppRoutes;
