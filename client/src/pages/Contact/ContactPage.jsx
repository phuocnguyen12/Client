import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ContactPage.scss"

const ContactPage = () => {
  return (
    <div>
      <section className="contact" id="contact">

        <h1 className="heading">
          Our <span>Contact</span>
        </h1>
        <div className="contact-container">
          <div className="box">
            <FontAwesomeIcon className="items" icon={faPhone} />
            <h3>Number</h3>
            <p>+84-000-0000</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="items" icon={faEnvelope} />
            <h3>Email</h3>
            <p>User@gmail.com</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="items" icon={faMapLocationDot} />
            <h3>Address</h3>
            <p>Da Nang, VietNam</p>
          </div>
        </div>

        <div className="row">
          <form action="">
            <h3>Get In Touch</h3>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="box"
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className="box"
              />
            </div>

            <div className="inputBox">
              <input
                type="number"
                placeholder="Enter Your Number"
                className="box"
              />
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="box"
              />
            </div>

            <textarea placeholder="Your Message" cols={30} rows={10}></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7463939704185!2d108.22986337498021!3d16.078644784602215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142198e78b4c99d%3A0x8baefaee44b6d863!2sGreenwich%20Vietnam%2C%20Danang%20Campus!5e0!3m2!1svi!2s!4v1693154376973!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Greenwich VietNam Danang Campus"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
