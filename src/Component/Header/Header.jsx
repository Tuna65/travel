import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo.png';

function Header() {
    return (
        <div className="Header__wrapper" id="Header">
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
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
