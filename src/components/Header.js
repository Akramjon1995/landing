import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
import bannerPhoto from '../assets/banner-photo.jpeg'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="header container-fluid">
                    <a className="navbar-brand logo"><img className="h-100" src={logo} alt="logo" /></a>
                    <div className="d-flex">
                        <a className="px-3 text-secondary" href="https://twitter.com/buzz_bingo">
                            <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
                        </a>
                        <a className="px-3 text-secondary" href="https://www.facebook.com/BuzzBingo">
                            <FontAwesomeIcon className="fa-2x" icon={faFacebookF} />
                        </a>
                        <a className="icons px-3 text-secondary" href="#">
                            <FontAwesomeIcon className="fa-2x" icon={faInfo} />
                        </a>
                    </div>
                </div>
            </nav>
            <div class="container-fluid banner">
                <div class="content">
                    <p>Purly made with HTML & CSS</p>
                </div>
                <div class="rotated-block"></div>
            </div>
            <section className="d-flex">
                <div className="content">
                    <h1>EURO STICKER PARTY</h1>
                    <p>
                        As one of the biggest song competitions in the world,
                        Eurovision has produced iconic songs and artists that we still listen to, to this day.
                    </p>
                    <p>
                        But have you ever wondered which songs and artists are
                        the most popular in the history of Eurovision?
                        </p>
                </div>
                <div className="img-container"></div>
            </section>
        </div>

    );
};


export default Header;