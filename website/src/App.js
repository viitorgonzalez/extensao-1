import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>


  );
}

export default App;
