import './Gallery.scss';
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import img1 from './../../assets/img/gallery-1.jpg';
import img2 from './../../assets/img/gallery-2.jpg';
import img3 from './../../assets/img/gallery-3.jpg';
import img4 from './../../assets/img/gallery-4.jpg';
import img5 from './../../assets/img/gallery-5.jpg';
import GalleryLayout from './GalleryLayout/GalleryLayout';

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

    const container = useRef();

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
                        <SwiperSlide key={index}>
                            <motion.div
                                className="Gallery__container"
                                initial={{ top: '50px', opacity: 0 }}
                                whileInView={{ top: '0px', opacity: 1 }}
                                transition={{ duration: 1, type: 'spring' }}
                                onClick={() => {
                                    const root = createRoot(container.current);
                                    root.render(<GalleryLayout number={index} />);
                                }}
                            >
                                <img src={item.path} alt="" className="Gallery__container-img" />
                                <span className="Gallery__container-blur"></span>
                                <span className="Gallery__container-content">
                                    Discovery Islands{' '}
                                    <span className="Gallery__container-content-type">{item.type}</span>
                                </span>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="GalleryLayout__layout" ref={container}></div>
        </div>
    );
}

export default Gallery;
