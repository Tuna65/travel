import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import './Banner.scss';

import bg1 from './../../img/slider-5.jpg';
import bg2 from './../../img/slider-1.jpg';
import layer from './../../img/layer-11.png';

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
                    {({ isActive }) => <BannerSlide className={isActive ? 'active Banner__slide' : 'Banner__slide'} />}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Banner__slide" style={{ backgroundImage: `url(${bg2})` }}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

const BannerSlide = (pops) => {
    return (
        <div className={`Banner__slide ${pops.className}`} style={{ backgroundImage: `url(${bg1})` }}>
            <div className="Banner__slide-content">
                <h4>Travel & Adventures</h4>
                <img src={layer} alt="" />
                <span>Where Would You Like To Go?</span>
            </div>
        </div>
    );
};

export default Banner;
