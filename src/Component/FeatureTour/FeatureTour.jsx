import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

import CardTour from '../CardTour/CardTour';
import Title from '../Title/Title';
import './FeatureTour.scss';

import img1 from './../../assets/img/post-1-580x450.jpg';
import img2 from './../../assets/img/post-2-580x450.jpg';
import img3 from './../../assets/img/post-3-580x450.jpg';
import img4 from './../../assets/img/post-4-580x450.jpg';
import img5 from './../../assets/img/post-5-580x450.jpg';
import img6 from './../../assets/img/post-6-580x450.jpg';

function FeatureTour() {
    const dataTours = [
        {
            path: img1,
            name: 'Brooklyn Christmas Lights Tour',
            location: 'Central Park West NY, USA',
            price: '$119.00',
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.6,
            amount: 3,
            numberCamera: 5,
        },
        {
            path: img2,
            name: 'Discovery Islands Kayaking Tour',
            location: 'Central Park West, USA',
            price: '$69.00',
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.3,
            amount: 3,
            numberCamera: 2,
        },
        {
            path: img3,
            name: 'Yucatán Peninsula & Caribbean',
            location: 'Bryce Canyon Central Park, USA',
            price: '$59.00',
            day: '10',
            numberOfMembers: '50',
            isFeatured: false,
            rate: 4.6,
            amount: 3,
            numberCamera: 6,
        },
        {
            path: img4,
            name: 'Java & Bali One Life Adventures',
            location: 'Central Park West NY, USA',
            price: '$59.00',
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.6,
            amount: 3,
            numberCamera: 6,
        },
        {
            path: img5,
            name: 'Los Glaciares & Fitz Roy Trip',
            location: 'Central Park West NY, USA',
            price: '$511.00',
            day: '9',
            numberOfMembers: '99',
            isFeatured: false,
            rate: 4.6,
            amount: 3,
            numberCamera: 7,
        },
        {
            path: img6,
            name: 'Mykonos and Santorini Tour',
            location: 'Central Park West NY, USA',
            price: '$49.00',
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.07,
            amount: 3,
            numberCamera: 9,
        },
    ];

    return (
        <div className="FeatureTour__wrapper">
            <div className="FeatureTour__inner">
                <div className="FeatureTour__title">
                    <Title type="Featured tours" note="Most Popular Tours" />
                </div>
                <div className="FeatureTour__list">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="FeatureTour__mySwiper"
                    >
                        {dataTours.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardTour {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default FeatureTour;
