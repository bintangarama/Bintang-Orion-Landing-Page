import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import FasetService from './components/FasetService';
import OrderEstimator from './components/OrderEstimator';
import Branches from './components/Branches';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <FasetService />
        <OrderEstimator />
        <Branches />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
