import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/*Mais vendidos*/}
      <div className="flex-1 flex-col flex items-center bg-Black">
        <p className="mt-10 font-bold text-4xl text-Green">Mais vendidos</p>
        <div className="rounded-lg container h-auto mx-auto p-5 my-10 bg-Green">
          <div className="grid grid-cols-4 gap-5">
            <div className="rounded-lg h-40 flex items-center justify-center bg-gray-500">
              Div 1
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 2
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 3
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 4
            </div>

            <div className="rounded-lg h-40 flex items-center justify-center bg-gray-500">
              Div 5
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 6
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 7
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 8
            </div>

            <div className="rounded-lg h-40 flex items-center justify-center bg-gray-500">
              Div 9
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 10
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 11
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 12
            </div>
          </div>
        </div>

        {/*Serviços*/}


        {/*Serviços*/}
        <p className="mt-10 font-bold text-4xl text-Green">Serviços</p>
        <div className="rounded-lg container h-auto mx-auto p-5 my-10 bg-Green">
          <div className="grid grid-cols-4 gap-5">
            <div className="rounded-lg h-40 flex items-center justify-center bg-gray-500">
              Div 1
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 2
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 3
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 4
            </div>

            <div className="rounded-lg h-40 flex items-center justify-center bg-gray-500">
              Div 5
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 6
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 7
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 8
            </div>

            <div className="rounded-lg h-40 flex items-center justify-center bg-gray-500">
              Div 9
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 10
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 11
            </div>
            <div className="rounded-lg flex items-center justify-center bg-gray-500">
              Div 12
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
