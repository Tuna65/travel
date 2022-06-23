import './Trip.scss';
import { motion } from 'framer-motion';
import img from './../../assets/img/image-6.jpg';
import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Trip() {
    return (
        <div className="Trip__wrapper">
            <div className="Trip__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-6">
                            <div className="Trip__banner">
                                <motion.div
                                    className="Trip__img"
                                    initial={{ transform: 'scale(0)' }}
                                    whileInView={{ transform: 'scale(1)' }}
                                    transiton={{ duration: 2, type: 'spring' }}
                                >
                                    <img src={img} alt="" />
                                </motion.div>
                                <motion.div
                                    className="Trip__contact"
                                    initial={{ transform: 'scale(0)' }}
                                    whileInView={{ transform: 'scale(1)' }}
                                    transiton={{ duration: 2, type: 'spring' }}
                                >
                                    <span className="Trip__contact-title">BOOK TOUR NOW</span>
                                    <span className="Trip__contact-phone">66668888</span>
                                </motion.div>
                                <motion.div
                                    className="Trip__deal"
                                    initial={{ transform: 'scale(0)' }}
                                    whileInView={{ transform: 'scale(1)' }}
                                    transiton={{ duration: 2, type: 'spring' }}
                                >
                                    <span className="Trip__deal-percent">30%</span>
                                    <span className="Trip__deal-note">Discount</span>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col l-6">
                            <motion.div
                                className="Trip__title"
                                initial={{ top: '20%' }}
                                whileInView={{ top: '0%' }}
                                transition={{ duration: 1, type: 'spring' }}
                            >
                                <Title type="Get to know us" note="Plan Your Trip with Trevily" />
                            </motion.div>
                            <div className="Trip__description">
                                <motion.p
                                    className="Trip__description-paragraph"
                                    initial={{ top: '50px' }}
                                    whileInView={{ top: '0px' }}
                                    transition={{ duration: 1, type: 'spring' }}
                                >
                                    There are many variations of passages of available but the majority have suffered
                                    alteration in some form, by injected hum randomised words which don't look even
                                    slightly.
                                </motion.p>
                                <motion.div
                                    className="Trip__description-list"
                                    initial={{ top: '50px' }}
                                    whileInView={{ top: '0px' }}
                                    transition={{ duration: 1, type: 'spring', delay: 0.3 }}
                                >
                                    <span className="Trip__description-list-content">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        Invest in your simply neighborhood
                                    </span>
                                    <span className="Trip__description-list-content">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        Support people in free text extreme
                                    </span>
                                    <span className="Trip__description-list-content">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        Largest global industrial business
                                    </span>
                                </motion.div>
                            </div>
                            <motion.button
                                className="Trip__description-btn btn"
                                initial={{ top: '50px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 1, type: 'spring', delay: 0.3 }}
                            >
                                BOOK WITH US NOW
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trip;
