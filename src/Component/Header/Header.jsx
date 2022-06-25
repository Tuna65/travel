import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo.png';
import { useState } from 'react';

function Header() {
    const [isSearch, setIsSearch] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isHeaderPosition, setIsHeaderPosition] = useState(false);

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
                        <img src={logo} alt="" />
                    </div>
                    <div className="Header__list-item">
                        <ul className="Header__main-item">
                            <li className="Header__active">
                                Home
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__home-list">
                                    <li>Home 1</li>
                                    <li>Home 2</li>
                                    <li>Home 3</li>
                                    <li>Home 4</li>
                                </ul>
                            </li>
                            <li>
                                Tour Page
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__tour-list">
                                    <li>Tour - Top Search</li>
                                    <li>Tour - SideBar Filter</li>
                                    <li>Tour - List View</li>
                                    <li>Tour - Single Layout I</li>
                                    <li>Tour - Single Layout II</li>
                                </ul>
                            </li>
                            <li>
                                Destination
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__destination-list">
                                    <li>Destination - List I</li>
                                    <li>Destination - List II</li>
                                    <li>Destination - Detail</li>
                                </ul>
                            </li>
                            <li>
                                News
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul className="Header__news-list">
                                    <li>New - I</li>
                                    <li>New - II</li>
                                    <li>New - Single</li>
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
                            <li>Contact</li>
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
                                <div className="Header__login">
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
        </div>
    );
}

export default Header;
