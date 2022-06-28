import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Comment.scss';
import avt from './../../assets/img/avt-user.png';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

function Comment({ ...item }) {
    return (
        <div className="Comment__wrapper">
            <div className="Comment__inner">
                <div className="Comment__left">
                    <img src={avt} alt="" />
                    <div className="Comment__left-container">
                        <span className="Comment-name">{item.name}</span>
                        <span className="Comment-date">{item.date}</span>
                    </div>
                </div>
                <p className="Comment-content">{item.comment}</p>
                <div className="Comment__reply">
                    <FontAwesomeIcon icon={faCommentDots} />
                    Reply
                </div>
            </div>
        </div>
    );
}

export default Comment;
