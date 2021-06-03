import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import euroStiker from "../assets/euro-sticker-party.png";
import bannerPhoto from "../assets/banner-photo.jpeg";

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
              As one of the biggest song competitions in the world, Eurovision
              has produced iconic songs and artists that we still listen to, to
              this day.
            </p>
            <p className="text-white mt-5 ms-5 ms-lg-5 ps-lg-5 banner-text">
              But have you ever wondered which songs and artists are the most
              popular in the history of Eurovision?
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
