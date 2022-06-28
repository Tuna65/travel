import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper';

import './BannerClone.scss';

import bg1 from '../../assets/img/slider-5.jpg';
import bg2 from '../../assets/img/bg-5.jpg';

function BannerClone({ ...item }) {
    return (
        <div className="BannerClone__wrapper">
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade]}
                className="BannerClone__mySwiper"
            >
                <SwiperSlide>
                    <div className="BannerClone__slide" style={{ backgroundImage: `url(${bg1})` }}>
                        <div className="BannerClone__slide-content">
                            <h4>{item.title}</h4>

                            <span className="BannerClone__slide-content-question">{item.content}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BannerClone__slide" style={{ backgroundImage: `url(${bg2})` }}>
                        <div className="BannerClone__slide-content">
                            <h4>{item.title}</h4>

                            <span className="BannerClone__slide-content-question">{item.content}</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BannerClone;
