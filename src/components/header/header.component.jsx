import React from 'react';
import { Link } from 'react-router-dom';

import Logo from'./logo.png';

import './header.styles.css';

const Header = () => (

        <div className="header">
            <Link className="logo" to='/'>
                <img src={Logo} alt="logo" height="70px"/>
            </Link>
            <div className="options">
                <Link className='option'>
                    SIGN IN
                </Link>
                <Link className='option'>
                    REGISTER
                </Link>
            </div>
        </div>       
);

export default Header;