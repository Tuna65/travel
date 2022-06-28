import {
    faAngleDown,
    faAnglesRight,
    faAngleUp,
    faArrowDown19,
    faArrowDownAZ,
    faArrowDownWideShort,
    faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListTour.scss';

import img1 from './../../assets/img/post-1-580x450.jpg';
import img2 from './../../assets/img/post-2-580x450.jpg';
import img3 from './../../assets/img/post-3-580x450.jpg';
import img4 from './../../assets/img/post-4-580x450.jpg';
import img5 from './../../assets/img/post-5-580x450.jpg';
import img6 from './../../assets/img/post-6-580x450.jpg';
import CardTour from '../CardTour/CardTour';
import { useState } from 'react';

function ListTour() {
    const dataTours = [
        {
            path: img1,
            name: 'Brooklyn Christmas Lights Tour',
            location: 'Central Park West NY, USA',
            price: 119.0,
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.6,
            amount: 3,
            numberCamera: 5,
        },
        {
            path: img2,
            name: 'Discovery Islands Kayaking Tour',
            location: 'Central Park West, USA',
            price: 69.0,
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.3,
            amount: 3,
            numberCamera: 2,
        },
        {
            path: img3,
            name: 'Yucatán Peninsula & Caribbean',
            location: 'Bryce Canyon Central Park, USA',
            price: 59.0,
            day: '10',
            numberOfMembers: '50',
            isFeatured: false,
            rate: 4.6,
            amount: 3,
            numberCamera: 6,
        },
        {
            path: img4,
            name: 'Java & Bali One Life Adventures',
            location: 'Central Park West NY, USA',
            price: 59.0,
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.6,
            amount: 3,
            numberCamera: 6,
        },
        {
            path: img5,
            name: 'Los Glaciares & Fitz Roy Trip',
            location: 'Central Park West NY, USA',
            price: 511.0,
            day: '9',
            numberOfMembers: '99',
            isFeatured: false,
            rate: 4.6,
            amount: 3,
            numberCamera: 7,
        },
        {
            path: img6,
            name: 'Mykonos and Santorini Tour',
            location: 'Central Park West NY, USA',
            price: 49.0,
            day: '10',
            numberOfMembers: '50',
            isFeatured: true,
            rate: 4.07,
            amount: 3,
            numberCamera: 9,
        },
    ];

    const filterPrice = (a, b) => a.price - b.price;
    const filterRate = (a, b) => a.rate - b.rate;
    const filterName = (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    };

    const [isHiddenFilter, setIsHiddenFilter] = useState(false);
    const [typeFilter, setTypeFilter] = useState('Title');
    const [isActiveType, setIsActiveType] = useState('Title');
    const [dataFilter, setDataFilter] = useState(dataTours);
    return (
        <div className="ListTour__wrapper">
            <div className="ListTour__inner">
                <div className="ListTour__filter">
                    <div className="ListTour__filter-left">
                        <span className="ListTour__filter-left-total">{dataFilter.length}</span>
                        <span>Tours</span>
                    </div>
                    <div className="ListTour__filter-right">
                        <span className="ListTour__filter-right-type">Sort by</span>
                        <span className="icon-type-filter">
                            <span style={isActiveType === 'Price' ? { display: 'block' } : { display: 'none' }}>
                                <FontAwesomeIcon icon={faArrowDown19} />
                            </span>
                            <span style={isActiveType === 'Name' ? { display: 'block' } : { display: 'none' }}>
                                <FontAwesomeIcon icon={faArrowDownAZ} />
                            </span>
                            <span style={isActiveType === 'Rating' ? { display: 'block' } : { display: 'none' }}>
                                <FontAwesomeIcon icon={faArrowDownWideShort} />
                            </span>
                            <span style={isActiveType === 'Title' ? { display: 'block' } : { display: 'none' }}>
                                <FontAwesomeIcon icon={faFilter} />
                            </span>
                        </span>
                        <div className="ListTour__filter-options">
                            <div
                                className="ListTour__filter-options-container"
                                onClick={() => {
                                    setIsHiddenFilter((prev) => !prev);
                                }}
                            >
                                <span>{typeFilter}</span>
                                <div className="container-angle-icon">
                                    <span style={isHiddenFilter ? { display: 'block' } : { display: 'none' }}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </span>
                                    <span style={!isHiddenFilter ? { display: 'block' } : { display: 'none' }}>
                                        <FontAwesomeIcon icon={faAngleUp} />
                                    </span>
                                </div>
                                <ul
                                    className="ListTour__filter-choose"
                                    style={isHiddenFilter ? { display: 'block' } : { display: 'none' }}
                                >
                                    <li
                                        className={isActiveType === 'Title' ? 'active' : ''}
                                        onClick={() => {
                                            setTypeFilter('Title');
                                            setIsActiveType('Title');
                                            setDataFilter(dataTours);
                                        }}
                                    >
                                        Title
                                    </li>
                                    <li
                                        className={isActiveType === 'Price' ? 'active' : ''}
                                        onClick={() => {
                                            setTypeFilter('Price');
                                            setIsActiveType('Price');
                                            setDataFilter(dataTours.sort(filterPrice));
                                        }}
                                    >
                                        Price
                                    </li>
                                    <li
                                        className={isActiveType === 'Rating' ? 'active' : ''}
                                        onClick={() => {
                                            setTypeFilter('Rating');
                                            setIsActiveType('Rating');
                                            setDataFilter(dataTours.sort(filterRate));
                                        }}
                                    >
                                        Rating
                                    </li>
                                    <li
                                        className={isActiveType === 'Name' ? 'active' : ''}
                                        onClick={() => {
                                            setTypeFilter('Name');
                                            setIsActiveType('Name');
                                            setDataFilter(dataTours.sort(filterName));
                                        }}
                                    >
                                        Name
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ListTour__container grid">
                    <div className="row">
                        {dataFilter.map((item, index) => (
                            <div className="col l-4" key={index}>
                                <CardTour {...item} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ListTour__page-number">
                    <span className="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>
                        Next <FontAwesomeIcon icon={faAnglesRight} style={{ fontSize: '10px' }} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ListTour;
