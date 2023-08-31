import React from 'react';
import { trending } from '../constants/constants';
import ProductBox from './ProductBox';

import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ItemsSlider = () => {
  const category = trending[0]?.category;

  return (
    <div className="w-full px-3 py-10">
      <div className="max-w-7xl mx-auto space-y-3">
        <h3 className="capitalize pb-4">Trending Products</h3>
        <Swiper
          className="w-full rounded-xl flex space-x-3"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          breakpoints={{
            380: {
              slidesPerView: 1.2,
            },
            460: {
              slidesPerView: 1.5,
            },
            530: {
              slidesPerView: 1.7,
            },
            580: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            880: {
              slidesPerView: 2.8,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1220: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
        >
          {trending[1]?.products?.map((item, i) => (
            <SwiperSlide key={item.id + i} className="select-none">
              <ProductBox
                key={item?.name + i}
                item={item}
                category={category}
                noZoom
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ItemsSlider;
