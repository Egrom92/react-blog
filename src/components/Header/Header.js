import React from 'react';

import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = props => {

    return (
        <header className="header">
            <div className="container">
                <nav className='nav'>
                    <div className="nav__logo">
                        <NavLink to='/' className='nav__logo-link' exact>{props.logo}</NavLink>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__point">
                            <NavLink to='/' className='nav__link' exact>Главная</NavLink>
                        </li>
                        <li className="nav__point">
                            <NavLink to='/all-news' className='nav__link' exact>Новости</NavLink>
                        </li>
                        <li className="nav__point">
                            <NavLink to='/contact' className='nav__link' exact>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header;