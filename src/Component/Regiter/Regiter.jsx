import { faCircleArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Title from '../Title/Title';
import './Regiter.scss';

import img from './../../assets/img/image-app.png';

function Regiter() {
    return (
        <div className="Regiter__wrapper">
            <div className="Regiter__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-6 Regiter__left">
                            <motion.div
                                className="Regiter__title"
                                initial={{ top: '100px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 1.5, type: 'spring' }}
                            >
                                <Title type="Join to us" note="Not a Member Yet?" />
                            </motion.div>
                            <motion.span
                                className="Regiter__description"
                                initial={{ top: '100px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 1.5, type: 'spring' }}
                            >
                                Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.
                            </motion.span>
                            <motion.div
                                className="Regiter__btn"
                                initial={{ right: '30%' }}
                                whileInView={{ right: '0%' }}
                                transition={{ duration: 1.5, type: 'spring' }}
                            >
                                <button className="Regiter__btn-log btn">
                                    <FontAwesomeIcon icon={faCircleArrowRight} />
                                    SIGN IN
                                </button>
                                <button className="Regiter__btn-regiter btn">
                                    <FontAwesomeIcon icon={faUser} />
                                    REGISTER
                                </button>
                            </motion.div>
                        </div>
                        <div className="col l-6 Regiter__right">
                            <motion.div
                                className="Regiter__right-img"
                                initial={{ top: '200px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 1, type: 'spring' }}
                            >
                                <img src={img} alt="" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Regiter;
