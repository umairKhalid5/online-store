import React from 'react';
import Image from './Image';
// import Swiper core and required modules
import {
  Navigation,
  A11y,
  Autoplay,
  Pagination,
  EffectFade,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

const swiperData = [
  {
    image: 'images/hero/headphone.jpg',
    title: 'Headphones',
    path: '/categories/headphones',
  },
  {
    image: 'images/hero/shoes.jpg',
    title: 'Shoes',
    path: '/categories/shoes',
  },
  {
    image: 'images/hero/furniture.jpg',
    title: 'Furniture',
    path: '/categories/furniture',
  },
  {
    image: 'images/hero/garments.jpg',
    title: 'Garments',
    path: '/categories/garments',
  },
];

const Hero = () => {
  return (
    <div className="hero-section w-full px-3 py-10 bg-slate-50 relative flex items-center">
      {/* Backgound Image */}
      <div className="image-container hidden md:block absolute inset-0 w-full h-full opacity-40">
        <Image
          opacity
          src="images/hero/bg.jpg"
          alt="hero background"
          className="object-cover w-full max-h-full -translate-x-[30%]"
        />
        {/* <img
          src="images/hero/bg.jpg"
          alt="hero background"
          className="object-cover w-full max-h-full -translate-x-[30%]"
        /> */}
      </div>

      <div className="flex-1 max-w-screen-2xl w-full mx-auto flex items-center relative z-10 md:space-x-5">
        {/* Welcome */}
        <div className="hidden md:flex flex-1 flex-col items-center space-y-5 text-center">
          <h2 className="text-3xl font-medium uppercase text-gray-700">
            Welcome to
            <span className="text-orange-600 font-semibold block text-5xl xl:text-6xl">
              Brandistic
            </span>
          </h2>
          <Link to="/categories/all" className="btn">
            See All Products
          </Link>
        </div>

        {/* Swiper */}
        <Swiper
          className="max-w-5xl md:w-2/3 aspect-video rounded-xl md:rounded-full shadow-lg"
          // install Swiper modules
          modules={[EffectFade, Navigation, Autoplay, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          loop={true}
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {swiperData.map(item => (
            <SwiperSlide
              key={item.image}
              className="relative before:absolute before:inset-0 before:bg-gray-50/30 before:content-[''] hover:before:bg-gray-50/10 before:duration-200 before:z-[1] select-none cursor-grab"
            >
              <Image
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.title}
              />
              {/* <img src={item.image} className="w-full h-full object-cover" /> */}
              <div className="absolute left-[50%] bottom-1 -translate-x-[50%] space-y-1 text-white text-center sm:bottom-3 sm:space-y-2 z-[2]">
                <h2 className="text-2xl py-1 px-1 text-orange-500 font-medium uppercase sm:text-7xl bg-white/80 rounded-full sm:px-3">
                  {item.title}
                </h2>
                <Link
                  to={item.path}
                  className="btn p-2 px-5 inline-block sm:w-64 sm:px-4 sm:py-3"
                >
                  Shop Now
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
