import DestinationCard from '../DestinationCard/DestinationCard';
import Title from '../Title/Title';
import { motion } from 'framer-motion';

import './DestinationList.scss';

import img1 from './../../assets/img/image-2.jpg';
import img2 from './../../assets/img/image-1.jpg';
import img3 from './../../assets/img/image-3.jpg';
import img4 from './../../assets/img/image-4.jpg';
import img5 from './../../assets/img/image-5.jpg';

function DestinationList() {
    const transiton = { duration: 1.5, type: 'spring' };
    return (
        <div className="DestinationList__wrapper">
            <div className="DestinationList__inner">
                <div className="DestinationList__title">
                    <Title type="Destination lists" note="Go Exotic Places" />
                </div>
                <div className="grid">
                    <div className="row ">
                        <motion.div
                            className="col l-3 m-3 c-12 dl__card"
                            initial={{ right: '15%', opacity: 0 }}
                            whileInView={{ right: '0%', opacity: 1 }}
                            transition={transiton}
                        >
                            <DestinationCard path={img1} type="" country="Moroco" number="3" />
                        </motion.div>

                        <motion.div
                            className="col l-6 m-6 c-12 dl__card"
                            initial={{ top: '100px', opacity: 0 }}
                            whileInView={{ top: '0px', opacity: 1 }}
                            transition={transiton}
                        >
                            <DestinationCard path={img2} type="Wildlife" country="United Kingdom" number="6" />
                        </motion.div>

                        <motion.div
                            className="col l-3 m-3 c-12 dl__card"
                            initial={{ left: '15%', opacity: 0 }}
                            whileInView={{ left: '0%', opacity: 1 }}
                            transition={transiton}
                        >
                            <DestinationCard path={img3} type="" country="Singapore" number="3" />
                        </motion.div>
                        <motion.div
                            className="col l-6 col l-6 m-6 c-12 dl__card"
                            initial={{ right: '15%', opacity: 0 }}
                            whileInView={{ right: '0%', opacity: 1 }}
                            transition={transiton}
                        >
                            <DestinationCard path={img4} type="Wildlife" country="Hungary" number="3" />
                        </motion.div>
                        <motion.div
                            className="col l-6 col l-6 m-6 c-12 dl__card"
                            initial={{ left: '15%', opacity: 0 }}
                            whileInView={{ left: '0%', opacity: 1 }}
                            transition={transiton}
                        >
                            <DestinationCard path={img5} type="Adventure" country="Italy" number="3" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationList;
