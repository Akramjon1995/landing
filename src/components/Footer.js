import React from 'react';
import footballPlayers from '../assets/football-players.jpg'

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-center align-items-center flex-column px-4 my-5">
        <div>
            <h1 className= "footer-header text-center">Need</h1>
            <div className="footer-paragraph align-items-center d-flex flex-column my-5 text-center text-white">
                <p className="text-start">
                    As one of the biggest song competitions in the world,
                    Eurovision has been produced iconic songs and artists that we still
                    listen to this days.
                </p>
                <p className="text-start">
                    But have you ever wonder which songs and artists are the most
                    popular in the history of Eurovision?
                </p>
            </div>
        </div>
        <div>
            <img className="footer-image" src={footballPlayers} alt="football-players" />
        </div>
    </div>
    );
};



export default Footer;