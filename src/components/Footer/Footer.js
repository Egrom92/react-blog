import React from 'react';
import './Footer.css'

const Footer = props => {
    return (
        <footer className='footer-section'>
            <div className="container">
                <div className="footer">
                    <div className="footer__logo-wrap">
                        <p className="footer__logo">
                            {props.logo}
                        </p>
                        <span className="footer__logo-description">
                            {props.description}
                        </span>
                    </div>
                    <p className="footer__work-name">
                        Дипломный проект
                    </p>
                    <div className="footer__author-wrap">
                        <p className="footer__author-desc">
                            Made by
                        </p>
                        <p className="footer__author">
                            {props.name} {props.lastName}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;