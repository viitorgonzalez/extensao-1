import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute z-50 top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center "
      onClick={onClick}
    >
      <img src="../IconCarrossel/seta-esquerda.png"></img>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className=" absolute top-1/2 right-0 transform -translate-y-1/2  w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      <img src="../IconCarrossel/seta-direita.png"></img>
    </button>
  );
};

const Home = () => {
  const settings = {
    dots:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding:"0",
    autoplay:true,
    pauseOnHover:true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className=' flex'>
    <Slider {...settings} className='w-2/3 mt-24 flex items-center justify-center ml-auto mr-auto '>
      <div>
        <img src="../horario.png" alt="Image 1" />
      </div>
      <div className='w-full justify-center flex'>
        <img src="../bannerred.png" alt="Image 2" />
      </div>
      <div>
        <img src="../horario.png" alt="Image 3" />
      </div>
      <div>
        <img src="../bannerred.png" alt="Image 4" />
      </div>

    </Slider>
    </div>
  );
};

export default Home;
