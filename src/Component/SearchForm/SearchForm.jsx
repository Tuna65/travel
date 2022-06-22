import './SearchForm.scss';

import icon1 from '../../assets/icon/icon1.png';
import icon2 from '../../assets/icon/icon2.png';
import icon3 from '../../assets/icon/icon3.png';
import icon4 from '../../assets/icon/icon4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Acivity, Date, Destinations, Filter, Guest } from './OptionsSearch/OptionsSearch';

function SearchForm() {
    const items = [
        {
            path: icon4,
            question: 'Where are you going?',
            type: 'Destinations',
            icon: faAngleDown,
            down: <Destinations />,
        },
        {
            path: icon3,
            question: 'Activity Type',
            type: 'Activity',
            icon: faAngleDown,
            down: <Acivity />,
        },
        {
            path: icon2,
            question: 'When',
            type: 'Date From',
            icon: '',
            down: <Date />,
        },
        {
            path: icon1,
            question: 'Guests',
            type: '0',
            icon: '',
            down: <Guest />,
        },
    ];

    return (
        <div className="search-form__wrapper">
            <div className="search-form__inner">
                {items.map((item, index) => {
                    return (
                        <div className="search-form__inner-items" key={index} onClick={() => {}}>
                            <div className="inner-items-img">
                                <img src={item.path} alt="" />
                            </div>
                            <div className="inner-items-container">
                                <span>{item.question}</span>
                                <span>{item.type}</span>
                            </div>
                            <FontAwesomeIcon icon={item.icon} />
                            {item.down}
                        </div>
                    );
                })}
                <div className="inner-icon__menu">
                    <FontAwesomeIcon icon={faBars} />
                    <Filter />
                </div>
                <button className="search-form__inner-btn btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH
                </button>
            </div>
        </div>
    );
}

export default SearchForm;
