import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { motion } from 'framer-motion';

import Title from '../Title/Title';
import './BlogPost.scss';
import BlogCard from '../BlogCard/BlogCard';

import img1 from './../../assets/img/post-1-580x450.jpg';
import img2 from './../../assets/img/post-2-580x450.jpg';
import img3 from './../../assets/img/post-3-580x450.jpg';
import img4 from './../../assets/img/post-4-580x450.jpg';
import img5 from './../../assets/img/post-5-580x450.jpg';
import img6 from './../../assets/img/post-6-580x450.jpg';

function BlogPost() {
    const data = [
        {
            path: img1,
            comment: 3,
            title: 'A Place where Start New Life with Peace',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img2,
            comment: 4,
            title: 'Journeys are Best Measured with Friends',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img3,
            comment: 5,
            title: 'Travel the Most Beautiful Places in the World',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img4,
            comment: 2,
            title: 'Top 10 Destinations & Adventure Trips',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img5,
            comment: 3,
            title: 'The Surfing Man Will Blow Your Mind',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img6,
            comment: 5,
            title: 'Things to See and Do When Visiting Japan',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
    ];

    return (
        <div className="BlogPost__wrapper">
            <div className="BlogPost__inner">
                <div className="BlogPost__title">
                    <motion.div
                        className="BlogPost__title-motion"
                        initial={{ right: '30%' }}
                        whileInView={{ right: '0%' }}
                        transition={{ duration: 1.5, type: 'spring' }}
                    >
                        <Title type="From the blog post" note="News & Articles" />
                    </motion.div>
                    <motion.button
                        className="BlogPost__btn btn"
                        initial={{ left: '30%' }}
                        whileInView={{ left: '0%' }}
                        transition={{ duration: 1.5, type: 'spring' }}
                    >
                        VIEW ALL POSTS
                    </motion.button>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="BlogPost__mySwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="BlogPost__mySwiper-card"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2, type: 'spring' }}
                            >
                                <BlogCard {...item} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default BlogPost;
