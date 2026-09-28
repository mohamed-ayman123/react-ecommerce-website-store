// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
//////////////////////////////////////////////////

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
/////////////////////////////////////////////////

import { Link } from 'react-router-dom';


function HomeSlider() {
  return (
      <>
      
      <div className="hero">
        <div className="container">

        </div>
      </div>
      
        <Swiper 
        loop={true} 
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
       <SwiperSlide>

        <div className="content">
            <h4>introducing to the new</h4>
            <h3>microsoft box</h3>

            <p>windows xp linliii</p>
            <Link to="/" className='btn'>shop now</Link>
        </div>
        <img src="/src/img/banner_Hero1.jpg" alt="banner" />
       </SwiperSlide>
       <SwiperSlide>

        <div className="content">
            <h4>introducing to the new</h4>
            <h3>microsoft box</h3>

            <p>windows xp linliii</p>
            <Link to="/" className='btn'>shop now</Link>
        </div>
        <img src="/src/img/banner_Hero2.jpg" alt="banner" />
       </SwiperSlide>
       <SwiperSlide>

        <div className="content">
            <h4>introducing to the new</h4>
            <h3>microsoft box</h3>

            <p>windows xp linliii</p>
            <Link to="/" className='btn'>shop now</Link>
        </div>
        <img src="/src/img/banner_Hero3.jpg" alt="banner" />
       </SwiperSlide>
      </Swiper>
      </>
  )
}

export default HomeSlider
////////////////////////////////////////////////
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";

// function HomeSlider() {
//   return (
//     <Swiper
//       pagination={true}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//       <SwiperSlide>Slide 6</SwiperSlide>
//       <SwiperSlide>Slide 7</SwiperSlide>
//       <SwiperSlide>Slide 8</SwiperSlide>
//       <SwiperSlide>Slide 9</SwiperSlide>
//     </Swiper>
//   );
// }

// export default HomeSlider;


//////////////////////////////////////////////////////////////
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// function HomeSlider() {
//   return (
//     <Swiper
//       pagination={true}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//     </Swiper>
//   );
// }

// export default HomeSlider;