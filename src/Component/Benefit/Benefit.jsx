import './Benefit.scss';
import { motion } from 'framer-motion';

import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

function Benefit() {
    return (
        <div className="Benefit__wrapper">
            <div className="Benefit__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-5 c-12 Benefit__left"></div>
                        <div className="col l-7 c-12 Benefit__right">
                            <motion.div
                                className="Benefit__right-title"
                                initial={{ top: '100px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 2, type: 'spring' }}
                            >
                                <Title type="Our benefit lists" note="Why Choose Tevily" />
                            </motion.div>
                            <motion.p
                                className="Benefit__right-paragraph"
                                initial={{ top: '100px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 2, type: 'spring' }}
                            >
                                There are many variations of passages of Lorem Ipsum is simply free text available in
                                the market for you, but the majority have suffered alteration in some form.
                            </motion.p>
                            <motion.div
                                className="Benefit__right-container"
                                initial={{ top: '100px' }}
                                whileInView={{ top: '0px' }}
                                transition={{ duration: 2, type: 'spring' }}
                            >
                                <div className="Benefit__right-container-content">
                                    <FontAwesomeIcon icon={faPersonWalking} />
                                    <div className="Benefit__right-content-description">
                                        <h4>Professional and Certified</h4>
                                        <p>
                                            Lorem ipsum is simply free text dolor sit but the majority have suffered
                                            amet, consectetur notted.
                                        </p>
                                    </div>
                                </div>
                                <div className="Benefit__right-container-content">
                                    <FontAwesomeIcon icon={faPlaneDeparture} id="plane" />
                                    <div className="Benefit__right-content-description">
                                        <h4>Professional and Certified</h4>
                                        <p>
                                            Lorem ipsum is simply free text dolor sit but the majority have suffered
                                            amet, consectetur notted.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;
