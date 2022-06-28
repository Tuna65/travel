import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginLayout.scss';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

function LoginLayout({ ...item }) {
    const userMessage = useRef();
    const PasswordMessage = useRef();

    const [userValue, setUserValue] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleCheck = (value1, element, text1) => {
        if (value1 === '') {
            element.current.innerText = `${text1}`;
        } else element.current.innerText = '';
    };

    const handleSubmit = (e) => {
        handleCheck(userValue, userMessage, 'Please enter your usename!');
        handleCheck(userPassword, PasswordMessage, 'Please enter your password!');

        if (userMessage.current.innerText === '') {
            alert('Thank for login');
        } else e.preventDefault();
    };

    return (
        <div className="LoginLayout__wrapper" style={item.state ? { display: 'block' } : { display: 'none' }}>
            <motion.div
                className="LoginLayout__inner"
                initial={{ opacity: 0, top: '6%' }}
                whileInView={{ opacity: 1, top: '16%' }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <form action="" className="LoginLayout__form">
                    <h5>Signin</h5>
                    <div className="input__container">
                        <label htmlFor="">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => {
                                setUserValue(e.target.value);
                                userMessage.current.innerText = '';
                            }}
                        />
                        <span className="input__message" ref={userMessage}></span>
                    </div>
                    <div className="input__container">
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="******"
                            onChange={(e) => {
                                setUserPassword(e.target.value);
                                PasswordMessage.current.innerText = '';
                            }}
                        />
                        <span className="password__message" ref={PasswordMessage}></span>
                    </div>
                    <input type="submit" value="LOGIN" className="submit__login" onClick={handleSubmit} />

                    <nav className="LoginLayout__nav">Lost your password?</nav>
                    <span className="LoginLayout__note-form">
                        Don't have an account <span>Register</span>
                    </span>

                    <span
                        className="LoginLayout__x-icon"
                        onClick={() => {
                            item.func(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </form>
            </motion.div>
        </div>
    );
}

export default LoginLayout;
