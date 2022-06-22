import './Gallery.scss';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from './../../assets/img/gallery-1.jpg';
import img2 from './../../assets/img/gallery-2.jpg';
import img3 from './../../assets/img/gallery-3.jpg';
import img4 from './../../assets/img/gallery-4.jpg';
import img5 from './../../assets/img/gallery-5.jpg';

function Gallery() {
    const gallerys = [
        {
            path: img1,
            type: 'wildlife',
        },
        {
            path: img2,
            type: 'Adventure',
        },
        {
            path: img3,
            type: 'Hang Gliding',
        },
        {
            path: img4,
            type: 'Sightseeing',
        },
        {
            path: img5,
            type: 'Adventure',
        },
    ];

    return (
        <div className="Gallery__wrapper">
            <div className="Gallery__inner">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="Gallery__mySwiper"
                >
                    {gallerys.map((item, index) => (
                        <SwiperSlide>
                            <div className="Gallery__container" key={index}>
                                <img src={item.path} alt="" className="Gallery__container-img" />
                                <span className="Gallery__container-blur"></span>
                                <span className="Gallery__container-content">
                                    Discovery Islands{' '}
                                    <span className="Gallery__container-content-type">{item.type}</span>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;
