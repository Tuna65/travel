import {
    faArrowRight,
    faCamera,
    faClock,
    faHeart,
    faLocationDot,
    faStar,
    faUserGroup,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './CardTour.scss';

function CardTour({ ...item }) {
    const [clickHear, setClickHear] = useState(false);

    return (
        <div className="CardTour__wrapper">
            <div className="CardTour__inner">
                <div className="CardTour__img">
                    <img src={item.path} alt="" />
                </div>
                <div className="CardTour__content">
                    <div className="CardTour__top">
                        <div className="CardTour__top-rate">
                            <span className="CardTour__top-rate-star">
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="CardTour__top-rate-star">
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="CardTour__top-rate-star">
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="CardTour__top-rate-star">
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="CardTour__top-rate-star">
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="CardTour__top-rate-number">{item.rate}</span>
                        </div>

                        <div className="CardTour__top-media">
                            <FontAwesomeIcon icon={faCamera} />
                            <FontAwesomeIcon icon={faVideo} />
                            <span className="CardTour__top-media-number">{item.numberCamera}</span>
                        </div>
                    </div>
                    <div className="CardTour__details">
                        <span className="CardTour__details-name">{item.name}</span>
                        <span className="CardTour__details-position">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {item.location}
                        </span>
                        <div className="CardTour__details-price">
                            From
                            <span>$ {item.price}.00</span>
                        </div>
                    </div>
                    <div className="CardTour__footer">
                        <div className="CardTour__footer-container">
                            <div className="CardTour__footer-time">
                                <FontAwesomeIcon icon={faClock} />
                                {item.day} days
                            </div>
                            <div className="CardTour__footer-people">
                                <FontAwesomeIcon icon={faUserGroup} />
                                {item.numberOfMembers}
                            </div>
                        </div>
                        <div className="CardTour__footer-navbar">
                            Explore
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>

                    <span className="CardTour__reactions">
                        {item.rate} BY {item.amount} REVIEW
                    </span>
                </div>

                <button className="CardTour__btn-like">
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => {
                            setClickHear(!clickHear);
                        }}
                        style={clickHear ? { color: 'red' } : { color: 'white' }}
                    />
                    <span className="CardTour__btn-like-blur"></span>
                </button>
                <span
                    className="CardTour__btn-state"
                    style={item.isFeatured ? { display: 'block' } : { display: 'none' }}
                >
                    FEATURE
                </span>
            </div>
        </div>
    );
}

export default CardTour;
