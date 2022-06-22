import './DestinationCard.scss';
import { motion } from 'framer-motion';

function DestinationCard({ ...item }) {
    const transiton = { duration: 2, type: 'spring' };
    return (
        <motion.div
            // initial={{ left: '32%' }}
            initial={`${item.position} : 32%`}
            whileInView={{ left: '0%' }}
            transition={transiton}
            className="DestinationCard__wrapper"
        >
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
        </motion.div>
    );
}

export default DestinationCard;
