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
                            <h2 className="banner__content-title">Качественный пошив<br></br>одежды, текстильных<br></br>и трикотажных изделий</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__content second">
                            <h2 className="banner__content-title">
                            Швейное производство<br></br>полного цикла, шьём<br></br>изделия под ключ!
                            </h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;