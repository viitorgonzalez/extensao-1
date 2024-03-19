import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 bg-gray-300 flex items-center justify-center">
        <p>
            ABOUT
        </p>
      </div>
      
      <Footer />
    </div>
  );
}
  
export default AboutPage;
