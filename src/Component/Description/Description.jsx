import { faJedi, faPersonSkating, faPersonWalking, faPlaneDeparture, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../Title/Title';
import './Description.scss';

function Description() {
    const dataTrip = [
        {
            path: faJedi,
            type: 'Wildlife',
        },
        {
            path: faPersonSkating,
            type: 'Paragliding',
        },
        {
            path: faPersonWalking,
            type: 'Adventure',
        },
        {
            path: faPlaneDeparture,
            type: 'Hang Glidings',
        },
    ];

    return (
        <div className="Description__wrapper">
            <div className="Description__inner">
                <div className="grid">
                    <div className="row">
                        <div className="col l-7 Description__left ">
                            <div className="Description__link">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                            <div className="Description__title">
                                <Title
                                    type="Are you ready to travel?"
                                    note="Tevily is a World Leading Online Tour Booking Platform"
                                />
                            </div>
                        </div>
                        <div className="col l-5 Description__right">
                            {dataTrip.map((item, index) => (
                                <div className="Description__right-inner">
                                    <div className="Description__right-container" key={index}>
                                        <div className="Description__right-icon">
                                            <FontAwesomeIcon icon={item.path} />
                                        </div>
                                        <span className="Description__right-type">
                                            {item.type} <br />
                                            Tour
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
