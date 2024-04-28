import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./FooterComponent.scss";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={["fas", "faUser"]} />
          <h3>TechZone</h3>
          <p>
            Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
            Laudantium?
          </p>
          <div className="share">
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </Link>
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </Link>
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </Link>
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </Link>
          </div>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <Link to="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +84 000 0000
          </Link>

          <Link to="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +84 000 0000
          </Link>

          <Link to="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            Name@email.com
          </Link>
          
          <Link to="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            DaNang, VietNam
          </Link>
        </div>

        <div className="box">
          <h3>quick info</h3>
          <Link to="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </Link>
          <Link to="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Shop
          </Link>
          <Link to="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            About
          </Link>
          <Link to="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Blog
          </Link>
          <Link to="#reviews" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Review
          </Link>
          <Link to="#blogs" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Contact
          </Link>
        </div>

        <div className="box">
          <h3>NewLetter</h3>
          <p>Subscribe for Lastest Updates</p>
          <input type="text" placeholder="Your email" />
          <button type="button" className="btn">
            Subscribe
          </button>
          <img src="images/payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
