import './Acivity.scss';
import { useContext, useState } from 'react';
import { guestContext } from './../../../GuetsContext';

function Acivity() {
    const result = useContext(guestContext);
    const [Active, setActive] = useState('Adventure');

    const handleOnclick = (e, values) => {
        result.handleGetAcivity(values);
        setActive(values);
    };

    const Acivitys = ['Adventure', 'Beache', 'City Tours', 'Cruise', 'Discovery', 'Historical'];

    return (
        <div className="Acivity__wrapper">
            <div className="Acivity__inner">
                <span className="Acivity__title">-Acivity-</span>
                <ul className="Acivity__types">
                    {Acivitys.map((acivity, index) => (
                        <li
                            key={index}
                            onClick={(e) => handleOnclick(e, acivity)}
                            className={Active === acivity ? 'active' : ''}
                        >
                            {acivity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Acivity;
