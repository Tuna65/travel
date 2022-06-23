import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';

import './Partners.scss';

import img1 from './../../assets/img/brand-1.png';
import img2 from './../../assets/img/brand-2.png';
import img3 from './../../assets/img/brand-3.png';
import img4 from './../../assets/img/brand-4.png';
import img5 from './../../assets/img/brand-5.png';

function Partners() {
    const images = [img1, img2, img3, img4, img5];

    return (
        <div className="Partners__wrapper">
            <div className="Partners__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-4 Partners__left">
                            <motion.span
                                className="Partners__left-text"
                                initial={{ right: '30%' }}
                                whileInView={{ right: '0%' }}
                                transition={{ duration: 1.5, type: 'spring' }}
                            >
                                Our Partners
                            </motion.span>
                        </div>
                        <div className="col l-8 Partners__right">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="Partners__mySwiper"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            className="partners__image"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 2, type: 'spring' }}
                                        >
                                            <img src={img} alt="" className="Partners__right-img" />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
