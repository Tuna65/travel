import './MemberRate.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MemberRate({ ...item }) {
    return (
        <div className="MemberRate__wrapper">
            <div className="MemberRate__inner">
                <div className="MemberRate__img">
                    <img src={item.path} alt="" />
                </div>

                <div className="MemberRate__container">
                    <span className="MemberRate__rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <p>{item.paragraph}</p>
                    <span className="MemberRate__name">{item.name}</span>
                    <span className="MemberRate__title">{item.title}</span>
                </div>
            </div>
        </div>
    );
}

export default MemberRate;
