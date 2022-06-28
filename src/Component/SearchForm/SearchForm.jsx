import './SearchForm.scss';

import icon1 from '../../assets/icon/icon1.png';
import icon2 from '../../assets/icon/icon2.png';
import icon3 from '../../assets/icon/icon3.png';
import icon4 from '../../assets/icon/icon4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import Date from './Date/Date';
import Destinations from './Destination/Destination';
import Acivity from './Acivity/Acivity';
import Filter from './Filter/Filter';
import Guest from './Guest/Guest';
import { guestContext } from './../../GuetsContext';

function SearchForm() {
    const [isDestination, setIsDestination] = useState(false);
    const [isActivity, setIsActivity] = useState(false);
    const [isWhen, setIsWhen] = useState(false);
    const [isGuests, setIsGuests] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    const result = useContext(guestContext);

    const items = [
        {
            path: icon4,
            question: 'Where are you going?',
            type: result.getDestination,
            icon: faAngleDown,
            down: <Destinations func={setIsDestination} />,
            ishidden: isDestination,
            handleOnclick: function () {
                setIsDestination((prev) => !prev);
                setIsActivity(false);
                setIsWhen(false);
                setIsGuests(false);
                setIsFilter(false);
            },
        },
        {
            path: icon3,
            question: 'Activity Type',
            type: result.getAcivity,
            icon: faAngleDown,
            down: <Acivity func={setIsActivity} />,
            ishidden: isActivity,
            handleOnclick: function () {
                setIsActivity((prev) => !prev);
                setIsWhen(false);
                setIsGuests(false);
                setIsFilter(false);
                setIsDestination(false);
            },
        },
        {
            path: icon2,
            question: 'When',
            type: 'Date From',
            icon: '',
            down: <Date />,
            ishidden: isWhen,
            handleOnclick: function () {
                setIsWhen((prev) => !prev);
                setIsActivity(false);
                setIsGuests(false);
                setIsFilter(false);
                setIsDestination(false);
            },
        },
        {
            path: icon1,
            question: 'Guests',
            type: result.total,
            icon: '',
            down: <Guest isHidden={isGuests} func={setIsGuests} />,
            ishidden: isGuests,
            handleOnclick: function () {
                setIsGuests((prev) => !prev);
                setIsActivity(false);
                setIsWhen(false);
                setIsFilter(false);
                setIsDestination(false);
            },
        },
    ];

    return (
        <div className="search-form__wrapper">
            <div className="search-form__inner">
                {items.map((item, index) => {
                    return (
                        <div className="search-form__inner-items" key={index}>
                            <div className="search-form-container" onClick={item.handleOnclick}>
                                <div className="inner-items-img">
                                    <img src={item.path} alt="" />
                                </div>
                                <div className="inner-items-container">
                                    <span>{item.question}</span>
                                    <span>{item.type}</span>
                                </div>
                                {item.icon !== '' ? <FontAwesomeIcon icon={item.icon} /> : ''}
                            </div>
                            <div
                                className="inner-item-container"
                                style={item.ishidden ? { display: 'block' } : { display: 'none' }}
                            >
                                {item.down}
                            </div>
                        </div>
                    );
                })}
                <div className="inner-icon__menu">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => {
                            setIsFilter((prev) => !prev);
                            setIsActivity(false);
                            setIsWhen(false);
                            setIsGuests(false);
                            setIsDestination(false);
                            setIsDestination(false);
                        }}
                    />
                    <div className="inner-filter" style={isFilter ? { display: 'block' } : { display: 'none' }}>
                        <Filter />
                    </div>
                </div>
                <button className="search-form__inner-btn btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH
                </button>
            </div>
        </div>
    );
}

export default SearchForm;
