import Link from 'next/link';
import styles from './styles.module.scss';
import { similar_products } from '../../../data/products';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

export default function SimilarSwiper() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className='swiper similar__swiper products__swiper'
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >
      {similar_products.map((p) => (
        <SwiperSlide>
          <Link href=''>
            <img src={p} alt='' />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
