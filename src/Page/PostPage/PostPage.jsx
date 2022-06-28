import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerClone from './../../Component/BannerClone/BannerClone';
import DestinationCard from './../../Component/DestinationCard/DestinationCard';
import './PostPage.scss';

import { faComments, faFolderOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';

import img from './../../assets/img/post-5.jpg';
import avatar from './../../assets/img/user.png';
import Comment from './../../Component/Comment/Comment';
import post1 from './../../assets/img/post-1-180x180.jpg';
import post2 from './../../assets/img/post-2-180x180.jpg';
import post3 from './../../assets/img/post-3-180x180.jpg';

import img1 from './../../assets/img/image-1.jpg';
import img2 from './../../assets/img/image-2.jpg';

function PostPage() {
    const container = useRef();
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const [listComment, setListComment] = useState([]);

    return (
        <div className="PostPage__wrapper">
            <div className="PostPage__banner">
                <BannerClone />
            </div>
            <div className="PostPage__inner grid">
                <div className="row">
                    <div className="col l-8 PostPage__content">
                        <div className="PostPage__content-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="PostPage__content-description">
                            <div className="description__top">
                                <div className="description__top-container">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>Admin</span>
                                </div>
                                <div className="description__top-container">
                                    <FontAwesomeIcon icon={faFolderOpen} />
                                    <span>File Style, Music </span>
                                </div>
                            </div>
                            <div className="description__content">
                                <span className="description__top-title">Top 10 Destinations & Adventure Trips</span>
                                <p>
                                    The Spring is a passionate and determined group of monthly givers on a mission to
                                    end the water crisis in our lifetime. People like you, from more than 100 countries
                                    around the world, giving anything they can to prove how unstoppable we are when we
                                    work together.
                                </p>
                                <h4>Clean water helps keep kids in school, especially girls.</h4>
                                <p>
                                    Less time collecting water means more time in class. Clean water and proper toilets
                                    at school means teenage girls don't have to stay home for a week out of every month.
                                </p>
                                <div className="description__content-blog">
                                    <span>''</span>
                                    <span className="blog__content">
                                        Before Natalia's village had a clean water tap, she often didn't have time for
                                        school. Now, she goes to school every day and she's the President of her local
                                        Water Committee. And she's just getting started.
                                    </span>
                                    <span className="blog__bar"></span>
                                    <span className="blog__signature">said Polito</span>
                                </div>
                                <h3>How do we tackle the water crisis?</h3>
                                <p>
                                    We work with local experts and community members to find the best sustainable
                                    solution in each place where we work, whether it’s a well, a piped system, a BioSand
                                    Filter, or a system for harvesting rainwater. And with every water point we fund,
                                    our partners coordinate sanitation and hygiene training, and establish a local Water
                                    Committee to help keep water flowing for years to come.
                                </p>
                                <span className="bar__cmt"></span>
                            </div>

                            <div className="Description__admin">
                                <div className="Description__admin-tags">
                                    <div className="Description__admin-tags-left">
                                        <span>Tags:</span>
                                        <button className="btn tag-btn">BEACH</button>
                                        <button className="btn tag-btn">LIFESTYLE</button>
                                        <button className="btn tag-btn">PARKS</button>
                                    </div>
                                    <div className="Description__admin-tags-right">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        <FontAwesomeIcon icon={faTumblr} />
                                    </div>
                                </div>

                                <div className="Description__admin-author">
                                    <div className="author__inner">
                                        <img src={avatar} alt="" />
                                        <div className="author__info">
                                            <span className="author__name">Admin</span>
                                            <span className="author__bar"></span>
                                        </div>
                                    </div>
                                </div>

                                <span className="Description__admin-title">Add a Comment</span>
                                <span className="Description__admin-bar"></span>

                                {/* render comment */}
                                <div className="comment-container" ref={container}>
                                    {listComment.map((item, index) => (
                                        <div className="post__comment" key={index}>
                                            <Comment name={item.name} comment={item.comment} date={item.date} />
                                        </div>
                                    ))}
                                </div>

                                <form action="" className="form-cmt">
                                    <p>Your email address will not be published.</p>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Your Name *"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                    <input type="email" className="input" placeholder="Your Email *" />
                                    <p>
                                        <input type="checkbox" />
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </p>
                                    <textarea
                                        name=""
                                        id=""
                                        placeholder="Write yout comment"
                                        className="textarea"
                                        onChange={(e) => setComment(e.target.value)}
                                        value={comment}
                                    ></textarea>

                                    <span className="submit__form-cmt">
                                        {/* <input type="submit" className="btn" value="POST COMMENT" /> */}
                                        <span
                                            className="btn btn-submit-comment"
                                            onClick={() => {
                                                setListComment([
                                                    ...listComment,
                                                    {
                                                        name: name,
                                                        comment: comment,
                                                        date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
                                                    },
                                                ]);
                                            }}
                                        >
                                            POST COMMENT
                                        </span>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 PostPage__other">
                        <div className="Recent__post">
                            <h3>Recent Posts</h3>
                            <div className="Recent__post-container">
                                <img src={post1} alt="" />
                                <div className="Recent__post-details">
                                    <span className="Recent__post-comment-title">
                                        <FontAwesomeIcon icon={faComments} />
                                        <span>3 comment</span>
                                    </span>
                                    <p>Things to See and Do When Visiting Japan</p>
                                </div>
                            </div>
                            <div className="Recent__post-container">
                                <img src={post2} alt="" />
                                <div className="Recent__post-details">
                                    <span className="Recent__post-comment-title">
                                        <FontAwesomeIcon icon={faComments} />
                                        <span>0 comment</span>
                                    </span>
                                    <p>A Place where Start New Life with Peace</p>
                                </div>
                            </div>
                            <div className="Recent__post-container">
                                <img src={post3} alt="" />
                                <div className="Recent__post-details">
                                    <span className="Recent__post-comment-title">
                                        <FontAwesomeIcon icon={faComments} />
                                        <span>0 comment</span>
                                    </span>
                                    <p>Journeys are Best Measured with Friends</p>
                                </div>
                            </div>
                        </div>

                        <div className="all__categories">
                            <h3>All Categories</h3>
                            <ul>
                                <li>Bussiness</li>
                                <li>Life Style</li>
                                <li>Music</li>
                                <li>Technology</li>
                            </ul>
                        </div>

                        <div className="all__Tags">
                            <h3>Tags</h3>
                            <div className="btn-container">
                                <button className="btn">Adventure</button>
                                <button className="btn">beach</button>
                                <button className="btn">lifestyle</button>
                                <button className="btn">parks</button>
                                <button className="btn">tourisms</button>
                            </div>
                        </div>
                        <DestinationCard path={img1} number={3} type="Wildlife" country="ThaiLand" />
                        <DestinationCard path={img2} number={3} type="" country="Afica" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
