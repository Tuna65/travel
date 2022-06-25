import './Filter.scss';

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
                    <div className="Filter__language" key={index}>
                        <span className="Filter__language-type">{filter.type}</span>
                        <div className="Filter__language-container">
                            {filter.name.map((item, index) => (
                                <div className="Filter__language-container-inner " key={index}>
                                    <input type="checkbox" className="Filter__checkbox" />
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

export default Filter;
