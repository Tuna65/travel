import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import './Footer.scss';

function Footer() {
    return (
        <div className="Footer__wrapper">
            <div className="Footer__inner">
                <div className="Footer__container">
                    <div className="Footer__left">
                        <Link spy={true} to="Header" smooth={true} activeClass="activeClass">
                            <span className="icon__up-top">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </span>
                        </Link>
                        <div className="Footer__icon">
                            <span>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faPinterest} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </div>
                    </div>

                    <span className="Footer__note">© Copyright 2021 by Gaviasthemes</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
