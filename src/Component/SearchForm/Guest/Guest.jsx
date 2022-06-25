import './Guest.scss';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { guestContext } from './../../../GuetsContext';

function Guest({ ...item }) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const result = useContext(guestContext);

    const handleOnClickBtn = () => {
        result.sum(count1, count2, count3);
        item.func(false);
    };

    const guests = [
        {
            type: 'Adult',
            number: count1,
            handleOnclickPlus: function () {
                setCount1((prev) => prev + 1);
            },
            handleOnclickMinus: function () {
                if (count1 > 0) {
                    setCount1((prev) => prev - 1);
                }
            },
        },
        {
            type: 'Youth',
            number: count2,
            handleOnclickPlus: function () {
                setCount2((prev) => prev + 1);
            },
            handleOnclickMinus: function () {
                if (count1 > 0) {
                    setCount2((prev) => prev - 1);
                }
            },
        },
        {
            type: 'Children',
            number: count3,
            handleOnclickPlus: function () {
                setCount3((prev) => prev + 1);
            },
            handleOnclickMinus: function () {
                if (count3 > 0) {
                    setCount3((prev) => prev - 1);
                }
            },
        },
    ];

    return (
        <div className="Guest__wrapper">
            {guests.map((guest, index) => (
                <div className="Guest__inner" key={index}>
                    <div className="Guest__type">
                        <span>{guest.number}</span>
                        <span>{guest.type}</span>
                    </div>
                    <div className="Guest__option">
                        <FontAwesomeIcon icon={faMinus} onClick={guest.handleOnclickMinus} />
                        <FontAwesomeIcon icon={faPlus} onClick={guest.handleOnclickPlus} />
                    </div>
                </div>
            ))}
            <button className="btn Guest__btn" onClick={handleOnClickBtn}>
                APPLY
            </button>
        </div>
    );
}

export default Guest;
