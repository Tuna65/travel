import './Header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo.png';
import { useState } from 'react';
import LoginLayout from '../Layout/LoginLayout/LoginLayout';

function Header() {
    const [isSearch, setIsSearch] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isHeaderPosition, setIsHeaderPosition] = useState(false);
    const [isHiddenLayout, setIsHiddenLayout] = useState(false);

    window.onscroll = () => {
        if (window.scrollY > 10) {
            setIsHeaderPosition(true);
        } else setIsHeaderPosition(false);
    };

    return (
        <div
            className="Header__wrapper"
            style={isHeaderPosition ? { position: 'fixed', top: 0 } : { position: 'relative' }}
        >
            <div className="Header__inner">
                <div className="Header__navbar">
                    <div className="Header__img">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="Header__list-item">
                        <ul className="Header__main-item">
                            <li className="Header__active">
                                Home
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__home-list">
                                    <Link to="/">
                                        <li>Home 1</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Home 2</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Home 3</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Home 4</li>
                                    </Link>
                                </ul>
                            </li>
                            <li>
                                Tour Page
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__tour-list">
                                    <Link to="/tour">
                                        <li>Tour - Top Search</li>
                                    </Link>
                                    <Link to="/tour">
                                        <li>Tour - SideBar Filter</li>
                                    </Link>
                                    <Link to="/tour">
                                        <li>Tour - List View</li>
                                    </Link>
                                    <Link to="/tour">
                                        <li>Tour - Single Layout I</li>
                                    </Link>
                                    <Link to="/tour">
                                        <li>Tour - Single Layout II</li>
                                    </Link>
                                </ul>
                            </li>
                            <li>
                                Destination
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__destination-list">
                                    <Link to="/destination">
                                        <li>Destination - List I</li>
                                    </Link>
                                    <Link to="/destination">
                                        <li>Destination - List II</li>
                                    </Link>
                                    <Link to="/destination">
                                        <li>Destination - Detail</li>
                                    </Link>
                                </ul>
                            </li>
                            <li>
                                News
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__news-list">
                                    <Link to="/news">
                                        <li>New - I</li>
                                    </Link>
                                    <Link to="/news">
                                        <li>New - II</li>
                                    </Link>
                                    <Link to="/news">
                                        <li>New - Single</li>
                                    </Link>
                                </ul>
                            </li>
                            <li>
                                Pages
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__page-list">
                                    <li>Page I</li>
                                    <li>Page II</li>
                                    <li>Page III</li>
                                </ul>
                            </li>
                            <Link to="/contact">
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="Header__elementor">
                    <div className="Header__icon">
                        <div className="Header__icon-search ">
                            <span
                                className={isSearch ? 'active H_search' : 'H_search'}
                                onClick={() => {
                                    setIsSearch((prev) => !prev);
                                }}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            <div
                                className="Header__icon-search-form"
                                style={
                                    isSearch
                                        ? { transform: 'scale(1)', transformOrigin: ' top' }
                                        : { transform: 'scale(0)', transformOrigin: 'top' }
                                }
                            >
                                <input type="text" name="" id="" className="search-input" placeholder="Search..." />
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                        <div className="Header__icon-user">
                            <span
                                className={isUser ? 'active H_user' : 'H_user'}
                                onClick={() => {
                                    setIsUser((prev) => !prev);
                                }}
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <div
                                className="Header__icon-user-form"
                                style={
                                    isUser
                                        ? { transform: 'scale(1)', transformOrigin: ' top' }
                                        : { transform: 'scale(0)', transformOrigin: 'top' }
                                }
                            >
                                <div
                                    className="Header__login"
                                    onClick={() => {
                                        setIsHiddenLayout(true);
                                        setIsUser(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>Login</span>
                                </div>
                                <div className="Header__register">
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    <span>Register</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginLayout state={isHiddenLayout} func={setIsHiddenLayout} />
        </div>
    );
}

export default Header;
