import React from 'react'
import Products from './Products'
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


function SlideProduct({ data, title }) {
    return (
        <div className='slide_products slide'>
            <div className="container">
                <div className="top_slide">
                    <h2>{title}</h2>
                    <p>Lorem, ipsum.</p>
                </div>
                <Swiper loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">


                    {/* {data.map(item)=>(
        return(
        <SwiperSlide><Products item={item}/> </SwiperSlide>

        )

     ) }  */}
                    {/* {data.map((item) => (
  <SwiperSlide key={item.id}>
    <Products item={item} />
  </SwiperSlide>
))} */}
                    {data?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Products item={item} />
                        </SwiperSlide>
                    ))}



                </Swiper>

            </div>
        </div>
    )
}

export default SlideProduct