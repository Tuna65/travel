import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import Iframe from 'react-iframe';
import Title from '../Title/Title';
import './ContactForm.scss';

function ContactForm() {
    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePhone, setValuePhone] = useState('');
    const [valueSubject, setValueSubject] = useState('');
    const [valueMessage, setValueMessage] = useState('');

    const [isBorderName, setIsBorderName] = useState(false);
    const [isBorderEmail, setIsBorderEmail] = useState(false);
    const [isBorderPhone, setIsBorderPhone] = useState(false);
    const [isBorderSubject, setIsBorderSubject] = useState(false);
    const [isBorderMessage, setIsBorderMessage] = useState(false);

    const warning = useRef();

    const handleCheck = (value, type) => {
        if (value === '') {
            warning.current.innerText = `Please enter ${type}`;
        }
    };

    const borderCheck = (value, func) => {
        if (value === '') {
            func(true);
        } else func(false);
    };

    const handleSubmit = (e) => {
        handleCheck(valueMessage, 'Your Message');
        handleCheck(valueSubject, 'Your Subject');
        handleCheck(valuePhone, 'Your Phone');
        handleCheck(valueEmail, 'Your Email');
        handleCheck(valueName, 'Your Name');

        borderCheck(valueName, setIsBorderName);
        borderCheck(valueEmail, setIsBorderEmail);
        borderCheck(valuePhone, setIsBorderPhone);
        borderCheck(valueSubject, setIsBorderSubject);
        borderCheck(valueMessage, setIsBorderMessage);

        if (valueName !== '' && valuePhone !== '' && valueEmail !== '' && valueSubject !== '' && valueMessage !== '') {
            warning.current.innerText = '';
        } else e.preventDefault();
    };
    return (
        <div className="ContactForm__wrapper">
            <div className="ContactForm__inner grid">
                <div className="row">
                    <div className="col l-4 ContactForm__left">
                        <Title type="Talk with our team" note="Any Question? Feel Free to Contact" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod
                            tincidunt.
                        </p>
                        <div className="ContactForm__left-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faPinterest} />
                        </div>
                    </div>
                    <div className="col l-8 ContactForm__right">
                        <form action="" className="ContactForm__right-form">
                            <div className="ContactForm__form-info">
                                <input
                                    className={!isBorderName ? 'input' : 'red-border input'}
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={valueName}
                                    onChange={(e) => setValueName(e.target.value)}
                                    onKeyDown={() => setIsBorderName(false)}
                                />
                                <input
                                    className={!isBorderEmail ? 'input' : 'red-border input'}
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setValueEmail(e.target.value)}
                                    value={valueEmail}
                                    onKeyDown={() => setIsBorderEmail(false)}
                                />
                                <input
                                    className={!isBorderPhone ? 'input' : 'red-border input'}
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    onChange={(e) => setValuePhone(e.target.value)}
                                    value={valuePhone}
                                    onKeyDown={() => setIsBorderPhone(false)}
                                />
                                <input
                                    className={!isBorderSubject ? 'input' : 'red-border input'}
                                    type="text"
                                    name="address"
                                    placeholder="Subject"
                                    onChange={(e) => setValueSubject(e.target.value)}
                                    value={valueSubject}
                                    onKeyDown={() => setIsBorderSubject(false)}
                                />
                            </div>
                            <textarea
                                className={!isBorderMessage ? 'textarea' : 'red-border textarea'}
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Write Message"
                                onChange={(e) => setValueMessage(e.target.value)}
                                onKeyDown={() => setIsBorderMessage(false)}
                                value={valueMessage}
                            ></textarea>
                            <span className="warning" ref={warning}></span>

                            <span>
                                <input
                                    type="submit"
                                    value="SEND A MESSAGE"
                                    className="ContactForm__submit"
                                    onClick={handleSubmit}
                                />
                            </span>
                        </form>
                    </div>
                </div>
                <div className="ContactForm__details">
                    <div className="ContactForm__details-container">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div className="ContactForm__details-inner">
                            <span className="type">Address</span>
                            <span className="details">88 Broklyn Street NY, USA</span>
                        </div>
                    </div>
                    <div className="ContactForm__details-container">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        <div className="ContactForm__details-inner">
                            <span className="type">Address</span>
                            <span className="details">88 Broklyn Street NY, USA</span>
                        </div>
                    </div>
                    <div className="ContactForm__details-container">
                        <FontAwesomeIcon icon={faAt} />
                        <div className="ContactForm__details-inner">
                            <span className="type">Address</span>
                            <span className="details">88 Broklyn Street NY, USA</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ContactForm__map">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1656315283203!5m2!1svi!2s" />
            </div>
        </div>
    );
}

export default ContactForm;
