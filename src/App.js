import React from 'react';

import Header from './components/Header'
import Home from './components/Home'
import BestSellers from './components/BestSellers';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-background w-full bg-fixed bg-cover'>
      <Header />
      <Home />
      <BestSellers />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
