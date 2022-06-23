import { faCircleCheck, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';

import logo from './../../assets/img/logo-white.png';

function Contact() {
    const items = [
        {
            type: 'Company',
            details: ['About Us', 'Community Blog', 'Rewards', 'Work with Us', 'Contact'],
        },
        {
            type: 'Explore',
            details: ['Account', 'Privacy Policy', 'Affilitate Program', 'Our Partner', 'Events'],
        },
    ];

    return (
        <div className="Contact__wrapper">
            <div className="Contact__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-4 Contact__contact">
                            <div className="Contact__contact-img">
                                <img src={logo} alt="" />
                            </div>
                            <ul className="Contact__contact-item">
                                <li>Welcome to our Trip and Tour Agency.</li>
                                <li>Lorem simply text amet cing elit.</li>
                                <li></li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="contact-Contact">92 666 888 0000</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="contact-Contact">contact@example.com</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    66 Broklyn Street New York, USA
                                </li>
                            </ul>
                        </div>

                        {items.map((item, index) => (
                            <div className="col l-2 Contact__item" key={index}>
                                <span className="Contact__item-type">{item.type}</span>
                                {item.details.map((detail, index) => (
                                    <ul className="Contact__item-list" key={index}>
                                        <li>{detail}</li>
                                    </ul>
                                ))}
                            </div>
                        ))}

                        <div className="col l-4 Contact__newsletter">
                            <div className="Contact__newsletter-container">
                                <span className="Contact__newsletter-type">Newsletter</span>
                                <div className="Contact__newsletter-form">
                                    <input
                                        type="email"
                                        className="Contact__newsletter-email input"
                                        placeholder="Email address"
                                    />
                                    <input
                                        type="submit"
                                        value="SUBCRIBE"
                                        className="Contact__newsletter-submit input"
                                    />
                                </div>
                                <span className="Contact__newsletter-check">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span>I agree to all terms and policies</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
