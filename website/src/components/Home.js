import React from "react";

function Home() {
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <div className="pt-64 w-full h-full">
        <img
          src="/Banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        ></img>
      </div>
    </div>
  );
}

export default Home;
