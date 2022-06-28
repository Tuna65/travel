import { useContext, useState } from 'react';
import { guestContext } from './../../../GuetsContext';
import './Destination.scss';

function Destinations({ func }) {
    const result = useContext(guestContext);

    const [Active, setActive] = useState('Moroco');

    const handleOnclick = (e, values) => {
        result.handleGetDestination(values);
        setActive(values);
        func(false);
    };

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
                    <ul className="Destinations__continent">
                        {item.countrys.map((country, index) => (
                            <li
                                key={index}
                                onClick={(e) => handleOnclick(e, country)}
                                className={Active === country ? 'active' : ''}
                            >
                                {country}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Destinations;
