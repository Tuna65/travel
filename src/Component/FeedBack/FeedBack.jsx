import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { motion } from 'framer-motion';

import MemberRate from '../MemberRate/MemberRate';
import Title from '../Title/Title';
import './FeedBack.scss';

import img1 from './../../assets/img/testimonial-1.jpg';
import img2 from './../../assets/img/testimonial-2.jpg';
import img3 from './../../assets/img/testimonial-3.jpg';
import img4 from './../../assets/img/testimonial-4.jpg';

function FeedBack() {
    const dataMember = [
        {
            path: img1,
            paragraph:
                "This is due to their best service, pricing and customer support. It's throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
            name: 'Sherly Smith',
            title: '',
        },
        {
            path: img2,
            paragraph:
                "This is due to their best service, pricing and customer support. It's throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
            name: 'Kenvin Smith',
            title: '',
        },
        {
            path: img3,
            paragraph:
                "This is due to their best service, pricing and customer support. It's throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
            name: 'Jessica Brown',
            title: '',
        },
        {
            path: img4,
            paragraph:
                "This is due to their best service, pricing and customer support. It's throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
            name: 'David Anderson',
            title: '',
        },
    ];

    return (
        <div className="FeedBack__wrapper">
            <div className="FeedBack__inner">
                <motion.div
                    className="FeedBack__title"
                    initial={{ top: '100px' }}
                    whileInView={{ top: '0px' }}
                    transition={{ duration: 2, type: 'spring' }}
                >
                    <Title type="Testimonials & reviews" note="What They’re Saying" />
                </motion.div>
                <div className="FeedBack__container">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="FeedBack__mySwiper"
                    >
                        {dataMember.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className="FeedBack__mySwiper-card"
                                    initial={{ top: '50px', opacity: 0 }}
                                    whileInView={{ top: '0px', opacity: 1 }}
                                    transition={{ duration: 2, type: 'spring' }}
                                >
                                    <MemberRate
                                        path={item.path}
                                        paragraph={item.paragraph}
                                        name={item.name}
                                        rate={item.title}
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default FeedBack;
