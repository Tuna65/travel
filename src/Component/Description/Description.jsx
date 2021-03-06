import { faJedi, faPersonSkating, faPersonWalking, faPlaneDeparture, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useState } from 'react';
import VideoLayout from '../Layout/VideoLayout/VideoLayout';
import Title from '../Title/Title';
import './Description.scss';

function Description() {
    const [isHiddenVideo, setIsHiddenVideo] = useState(false);

    const dataTrip = [
        {
            path: faJedi,
            type: 'Wildlife',
        },
        {
            path: faPersonSkating,
            type: 'Paragliding',
        },
        {
            path: faPersonWalking,
            type: 'Adventure',
        },
        {
            path: faPlaneDeparture,
            type: 'Hang Glidings',
        },
    ];

    return (
        <div className="Description__wrapper">
            <div className="Description__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-7 m-7 c-12 Description__left ">
                            <motion.div
                                className="Description__link"
                                initial={{ right: '30%' }}
                                whileInView={{ right: '-5%' }}
                                transition={{ duration: 1.5, type: 'spring' }}
                                onClick={() => {
                                    setIsHiddenVideo(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                            <div className="Description__title">
                                <Title
                                    type="Are you ready to travel?"
                                    note="Tevily is a World Leading Online Tour Booking Platform"
                                />
                            </div>
                        </div>
                        <div className="col l-5 m-5 c-12 Description__right">
                            {dataTrip.map((item, index) => (
                                <motion.div
                                    className="Description__right-inner"
                                    initial={{ transform: 'scale(0)' }}
                                    whileInView={{ transform: 'scale(1)' }}
                                    transition={{ duration: 1.5, type: 'spring' }}
                                    key={index}
                                >
                                    <div className="Description__right-container" key={index}>
                                        <div className="Description__right-icon">
                                            <FontAwesomeIcon icon={item.path} />
                                        </div>
                                        <span className="Description__right-type">
                                            {item.type} <br />
                                            Tour
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <VideoLayout state={isHiddenVideo} func={setIsHiddenVideo} />
        </div>
    );
}

export default Description;
