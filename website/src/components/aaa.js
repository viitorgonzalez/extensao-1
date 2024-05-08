import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div id="home" className="flex flex-col min-h-screen items-center justify-center">
      <Slider {...settings} className="w-full max-w-xl">
        <div className="">
          <img src="/Banner.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="/img2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/img3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Home;