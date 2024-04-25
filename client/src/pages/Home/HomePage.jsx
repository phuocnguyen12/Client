import React, { useState } from "react";
import { Link } from "react-router-dom";
import device1 from "../../assets/arduino-Uno.png";
import device2 from "../../assets/arduino-control.png";
import device3 from "../../assets/arduino-nano.png";
import banner1 from "../../assets/category1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./HomePage.scss";

const HomePage = () => {
  const slides = [device1, device2, device3];
  const [index, setIndex] = useState(0);
  const handleSlideChange = (increment) => {
    const newIndex = (index + increment + slides.length) % slides.length;
    setIndex(newIndex);
  };
  return (
    <div>
      <section className="home">
        <div className="slides-container">
          {slides.map((slide, idx) => (
            <div className={`slide ${index === idx ? "active" : ""}`} key={idx}>
              <div className="content">
                <span>device and module</span>

                <h3>up to 50% off</h3>

                <Link to="#" className="btn">
                  shop now
                </Link>
              </div>

              <div className="image">
                <img src={slide} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div
          id="next-slide"
          className="next-icon"
          onClick={() => handleSlideChange(1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <div
          id="prev-slide"
          className="prev-icon"
          onClick={() => handleSlideChange(-1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </section>

      <section className="banner-container">
        <div className="banner">
          <img src={banner1} alt="" />

          <div className="content">
            <span>limited sales</span>

            <h3>up to 50% off</h3>

            <Link to={"#"} className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div className="banner">
          <img src={banner1} alt="" />

          <div className="content">
            <span>limited sales</span>

            <h3>up to 50% off</h3>

            <Link to={"#"} className="btn">
              shop now
            </Link>
          </div>
        </div>

        <div className="banner">
          <img src={banner1} alt="" />

          <div className="content">
            <span>limited sales</span>

            <h3>up to 50% off</h3>

            <Link to={"#"} className="btn">
              shop now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
