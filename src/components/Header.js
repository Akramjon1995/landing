import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import euroStiker from "../assets/euro-sticker-party.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="header container-fluid">
          <a className="navbar-brand logo">
            <img className="h-100" src={logo} alt="logo" />
          </a>
          <div className="d-flex">
            <a
              className="px-3 text-secondary"
              href="https://twitter.com/buzz_bingo"
            >
              <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
            </a>
            <a
              className="px-3 text-secondary"
              href="https://www.facebook.com/BuzzBingo"
            >
              <FontAwesomeIcon className="fa-2x" icon={faFacebookF} />
            </a>
            <a className="icons px-3 text-secondary" href="#">
              <FontAwesomeIcon className="fa-2x" icon={faInfo} />
            </a>
          </div>
        </div>
      </nav>
      <section className="skewbox">
        <div className="d-flex img-wrapper h-100">
          <div className="content d-flex flex-column">
            <img className="mt-5 ms-5 ms-sm-5 ps-md-5 w-50" src={euroStiker} />
            <p className="text-white mt-5 ms-5 ms-lg-5 ps-lg-5 banner-text">
                Everyone loves completing the official Panini sticker book every time
                a major international sporting tournament comes around. 
            </p>
            <p className="text-white mt-5 ms-5 ms-lg-5 ps-lg-5 banner-text">
                And with maths experts claiming you can complete the Euro 2020 sticker book
                (with a 90% confidence rate) from 993 packs, we bought 1,500 of them to test the theory. 
            </p>
          </div>
          <div className="image-box">

          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
