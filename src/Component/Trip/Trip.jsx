import './Trip.scss';
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
                                <div className="Trip__img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="Trip__contact">
                                    <span className="Trip__contact-title">BOOK TOUR NOW</span>
                                    <span className="Trip__contact-phone">66668888</span>
                                </div>
                                <div className="Trip__deal">
                                    <span className="Trip__deal-percent">30%</span>
                                    <span className="Trip__deal-note">Discount</span>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6">
                            <div className="Trip__title">
                                <Title type="Get to know us" note="Plan Your Trip with Trevily" />
                            </div>
                            <div className="Trip__description">
                                <p className="Trip__description-paragraph">
                                    There are many variations of passages of available but the majority have suffered
                                    alteration in some form, by injected hum randomised words which don't look even
                                    slightly.
                                </p>
                                <div className="Trip__description-list">
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
                                </div>
                            </div>
                            <button className="Trip__description-btn btn">BOOK WITH US NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trip;
