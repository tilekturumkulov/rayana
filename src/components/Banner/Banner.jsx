import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <Swiper
                    scrollbar={{
                    hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="banner__content first">
                            <h2 className="banner__content-title">Швейный цех в Кыргызстане
                            </h2>
                            <span className='banner__content-subtitle'>Надежный партнер для заказчиков из России: многолетний опыт<br></br>пошива женской одежды на заказ для Wildberris</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__content second">
                            <h2 className="banner__content-title">
                            Швейное производство полного цикла, шьём изделия под ключ!
                            </h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;