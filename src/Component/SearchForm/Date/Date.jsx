import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Date.scss';
function Date() {
    const [valueDate, setValueDate] = useState('');
    return (
        <div className="Date__wrapper">
            <div className="Date__inner">
                <Calendar className="Calendar" onClickDay={(value) => setValueDate(value)} />
                <div className="Date__inner-btn">
                    <div className="btn">Cancel</div>
                    <div className="btn">Apply</div>
                </div>
            </div>
        </div>
    );
}

export default Date;
