import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import './Banner.scss';

import bg1 from '../../assets/img/slider-5.jpg';
import bg2 from '../../assets/img/slider-1.jpg';
import layer from '../../assets/img/layer-11.png';

function Banner() {
    return (
        <div className="Banner__wrapper">
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 500000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="Banner__mySwiper"
            >
                <SwiperSlide>
                    {({ isActive }) => (
                        <div
                            className={isActive ? 'active Banner__slide' : 'Banner__slide'}
                            style={{ backgroundImage: `url(${bg1})` }}
                        >
                            <div className="Banner__slide-content">
                                <h4>Travel & Adventures</h4>
                                <div className="Banner__slide-content-img">
                                    <img src={layer} alt="" />
                                </div>
                                <span className="Banner__slide-content-question">Where Would You Like To Go?</span>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div
                            className={isActive ? 'actived Banner__slide' : 'Banner__slide'}
                            style={{ backgroundImage: `url(${bg2})` }}
                        >
                            <div className="Banner__slide-content">
                                <h5>Traveling</h5>
                                <div className="Banner__slide-content-img-1">
                                    <img src={layer} alt="" />
                                </div>
                                <div className="Banner__slide-inner-content1">
                                    <span className="content">Your Journey Begins Here</span>
                                </div>
                                <span className="Banner__slide-content-amount">
                                    <div className="inner-amount">
                                        <p>
                                            8700 TOUR ARE AVAILABLE, <span>BOOK NOW</span>
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
