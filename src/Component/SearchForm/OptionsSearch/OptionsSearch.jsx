import Calendar from 'react-calendar';
import './OptionsSearch.scss';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function Destinations() {
    const Destinations = [
        {
            continent: 'Afica',
            countrys: ['Moroco', 'Nigeria', 'Tanzania'],
        },
        {
            continent: 'Asia',
            countrys: ['Japan', 'Singapore', 'Thailand'],
        },
        {
            continent: 'Europe',
            countrys: ['France', 'Germany', 'Hungary', 'Italy'],
        },
    ];

    return (
        <div className="Destinations__wrapper">
            <div className="Destinations__inner">
                <div className="Destinations__title">-Destination-</div>
            </div>

            {Destinations.map((item, index) => (
                <div className="Destinations__detail" key={index}>
                    <span>{item.continent}</span>
                    {item.countrys.map((country, index) => (
                        <ul className="Destinations__continent">
                            <li>{country}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
}

function Acivity() {
    const Acivitys = ['Adventure', 'Beache', 'City Tours', 'Cruise', 'Discovery', 'Historical'];

    return (
        <div className="Acivity__wrapper">
            <div className="Acivity__inner">
                <span className="Acivity__title">-Acivity-</span>
                {Acivitys.map((acivity, index) => (
                    <ul className="Acivity__types" key={index}>
                        <li>{acivity}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

function Date() {
    return (
        <div className="Date__wrapper">
            <div className="Date__inner">
                <Calendar className="Calendar" />
                <div className="Date__inner-btn">
                    <div className="btn">Cancel</div>
                    <div className="btn">Apply</div>
                </div>
            </div>
        </div>
    );
}

function Guest() {
    const guests = ['Adult', 'Youth', 'Children'];

    return (
        <div className="Guest__wrapper">
            {guests.map((gutest, index) => (
                <div className="Guest__inner" key={index}>
                    <div className="Guest__type">
                        <span>0</span>
                        <span>{gutest}</span>
                    </div>
                    <div className="Guest__option">
                        <FontAwesomeIcon icon={faMinus} />
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            ))}
            <button className="btn Guest__btn">APPLY</button>
        </div>
    );
}

function Filter() {
    const filters = [
        {
            type: 'All Language',
            name: ['English', 'French', 'German', 'Japanese', 'Spanish', 'Thailand'],
        },
        {
            type: 'All Amenities',
            name: [
                'Accepts Credit Cards',
                'Car Parking',
                'Free Coupons',
                'Laundry service',
                'Outdoor Seating',
                'Reservations',
                'Restaurant',
                'Smoking Allowed',
                'Wireless Internet',
            ],
        },
    ];

    return (
        <div className="Filter__wrapper">
            <div className="Filter__inner">
                <div className="Filter__bar">
                    <span className="Filter__bar-from"></span>
                    <span className="Filter__bar-to"></span>
                    <span className="Filter__bar-background"></span>
                </div>
                {filters.map((filter, index) => (
                    <div className="Filter__language">
                        <span className="Filter__language-type">{filter.type}</span>
                        <div className="Filter__language-container">
                            {filter.name.map((item, index) => (
                                <div className="Filter__language-container-inner " key={index}>
                                    <input type="checkbox" />
                                    <label htmlFor="">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Destinations, Acivity, Date, Guest, Filter };
