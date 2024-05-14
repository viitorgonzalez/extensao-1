import React from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute z-30 top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center "
      onClick={onClick}
    >
      <img src="../IconCarrossel/seta-esquerda.png" alt="Seta Esquerda" />
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
      <img src="../IconCarrossel/seta-direita.png" alt="Seta Direita" />
    </button>
  );
};

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    pauseOnHover: true,
    arrows:!isMobile,
    prevArrow:<CustomPrevArrow />,
    nextArrow:<CustomNextArrow />,
  };

  return (
    <div className='flex' id="home">
      <Slider {...settings} className='w-full lg:w-2/3 mt-20 lg:mt-24 flex items-center justify-center ml-auto mr-auto'>
        <div>
          <img src="../banner70anos.png" alt="Banner 70 anos" />
        </div>
        <div>
          <img src="../horario.png" alt="Horário" />
        </div>
        <div>
          <img src="../bannerred.png" alt="Banner Red" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
