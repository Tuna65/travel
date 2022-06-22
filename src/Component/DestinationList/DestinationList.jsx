import DestinationCard from '../DestinationCard/DestinationCard';
import Title from '../Title/Title';
import './DestinationList.scss';

import img1 from './../../assets/img/image-2.jpg';
import img2 from './../../assets/img/image-1.jpg';
import img3 from './../../assets/img/image-3.jpg';
import img4 from './../../assets/img/image-4.jpg';
import img5 from './../../assets/img/image-5.jpg';

function DestinationList() {
    const destinations = [
        {
            path: img1,
            type: '',
            country: 'Moroco',
            number: '',
            col: 3,
            position: 'left',
        },
        {
            path: img2,
            type: 'Wildlife',
            country: 'United Kingdom',
            number: '',
            col: 6,
            position: 'left',
        },
        {
            path: img3,
            type: '',
            country: 'Singapore',
            number: '',
            col: 3,
            position: 'left',
        },
        {
            path: img4,
            type: 'Wildlife',
            country: 'Hungary',
            number: '',
            col: 6,
            position: 'left',
        },
        {
            path: img5,
            type: 'Adventure',
            country: 'Italy',
            number: '',
            col: 6,
            position: 'left',
        },
    ];

    return (
        <div className="DestinationList__wrapper">
            <div className="DestinationList__inner">
                <div className="DestinationList__title">
                    <Title type="Destination lists" note="Go Exotic Places" />
                </div>
                <div className="grid">
                    <div className="row ">
                        {destinations.map((item, index) => (
                            <div className={`col l-${item.col}`} key={index}>
                                <DestinationCard
                                    path={item.path}
                                    type={item.type}
                                    country={item.country}
                                    number={item.number}
                                    index={index}
                                    position={'left'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationList;
