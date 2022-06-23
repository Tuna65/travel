import { faArrowRight, faComments, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BlogCard.scss';

function BlogCard({ ...item }) {
    return (
        <div className="BlogCard__wrapper">
            <div className="BlogCard__inner">
                <div className="BlogCard__img">
                    <img src={item.path} alt="" />
                </div>
                <div className="BlogCard__content">
                    <div className="BlogCard__content-top">
                        <div className="BlogCard__content-top-notice">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span>ADMIN</span>
                        </div>

                        <div className="BlogCard__content-top-notice">
                            <FontAwesomeIcon icon={faComments} />
                            <span>{item.comment} COMMENT</span>
                        </div>
                    </div>

                    <div className="BlogCard__content-details">
                        <span className="BlogCard__content-detail-title">{item.title}</span>
                        <span className="BlogCard__content-detail-paragraph">{item.description}</span>
                    </div>

                    <span className="BlogCard__content-more">
                        READ MORE <FontAwesomeIcon icon={faArrowRight} />
                    </span>

                    <div className="BlogCard__content-time">
                        08 <br /> <span>DEC</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
