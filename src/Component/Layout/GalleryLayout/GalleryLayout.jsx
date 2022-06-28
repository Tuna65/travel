import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import './GalleryLayout.scss';

import img1 from './../../../assets/img/gallery-1.jpg';
import img2 from './../../../assets/img/gallery-2.jpg';
import img3 from './../../../assets/img/gallery-3.jpg';
import img4 from './../../../assets/img/gallery-4.jpg';
import img5 from './../../../assets/img/gallery-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faMagnifyingGlassPlus, faShare, faXmark } from '@fortawesome/free-solid-svg-icons';

function GalleryLayout({ number }) {
    const [isZoom, setIsZoom] = useState(false);

    const imgs = [img1, img2, img3, img4, img5];
    const newIMG = [imgs.splice(number, 1), ...imgs];

    const layout = useRef();

    return (
        <div className="GalleryLayout__wrapper" ref={layout}>
            <div className="GalleryLayout__inner">
                <Swiper navigation={true} modules={[Navigation]} className="GalleryLayout__mySwiper" loop={true}>
                    {newIMG.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt=""
                                className="GalleryLayout__container-img"
                                style={isZoom ? { transform: 'scale(1.8)' } : { transform: 'scale(1)' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="GalleryLayout__icon">
                <FontAwesomeIcon icon={faExpand} />
                <FontAwesomeIcon
                    icon={faMagnifyingGlassPlus}
                    onClick={() => {
                        setIsZoom(!isZoom);
                    }}
                />
                <FontAwesomeIcon icon={faShare} />
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => {
                        layout.current.style.display = 'none';
                    }}
                />
            </div>
        </div>
    );
}

export default GalleryLayout;
