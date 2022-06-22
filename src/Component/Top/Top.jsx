import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Top.scss';

function Top() {
    return (
        <div className="Top__wrapper">
            <div className="Top__inner">
                <div className="Top__left">
                    <div className="Top__inner-left">
                        <span className="Top__phone">
                            <FontAwesomeIcon icon={faPhone} />
                            666 88 0000
                        </span>
                        <span className="Top__email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            contact@gmail.com
                        </span>
                    </div>
                </div>
                <div className="Top__right">
                    <div className="Top__inner-right">
                        <div className="Top__right-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faPinterest} />
                        </div>
                        <div className="Top__right-btn">
                            <button className="btn Top__btn">BECOME A LOCAL GUIDE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;
