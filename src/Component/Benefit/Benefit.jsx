import './Benefit.scss';

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
                            <div className="Benefit__right-title">
                                <Title type="Our benefit lists" note="Why Choose Tevily" />
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum is simply free text available in
                                the market for you, but the majority have suffered alteration in some form.
                            </p>
                            <div className="Benefit__right-container">
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
                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                    <div className="Benefit__right-content-description">
                                        <h4>Professional and Certified</h4>
                                        <p>
                                            Lorem ipsum is simply free text dolor sit but the majority have suffered
                                            amet, consectetur notted.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;
