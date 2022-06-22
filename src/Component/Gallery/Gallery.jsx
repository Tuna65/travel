import './Gallery.scss';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from './../../assets/img/gallery-1.jpg';
import img2 from './../../assets/img/gallery-2.jpg';
import img3 from './../../assets/img/gallery-3.jpg';
import img4 from './../../assets/img/gallery-4.jpg';
import img5 from './../../assets/img/gallery-5.jpg';

function Gallery() {
    return (
        <div className="Gallery__container">
            <div className="Gallery__inner">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="Gallery__mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src={img1} alt="" className="Gallery__img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;
