import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 flex-col bg-gray-300 flex items-center justify-center">
        <p>
            MAIN
        </p>
        <h1 className="text-blue-500">Dioguera gostoso</h1>
      </div>
      
      <Footer />
    </div>
  );
}
  
export default HomePage;
