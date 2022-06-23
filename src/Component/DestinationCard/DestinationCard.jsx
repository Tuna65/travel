import './DestinationCard.scss';

function DestinationCard({ ...item }) {
    return (
        <div className="DestinationCard__wrapper">
            <div className="DestinationCard__img">
                <img src={item.path} alt="" />
                <span className="DestinationCard__blur"></span>
            </div>
            <div className="DestinationCard__inner">
                <button className="DestinationCard__btn btn">{item.number} TOURS</button>
                <div className="DestinationCard__container">
                    <div className="DestinationCard__type">{item.type}</div>
                    <div className="DestinationCard__country">{item.country}</div>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
