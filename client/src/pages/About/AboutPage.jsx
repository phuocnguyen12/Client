import React from "react";
import about from "../../assets/electronic-components.png";
import gallery from "../../assets/ram-memory.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import "./AboutPage.scss"

const AboutPage = () => {
    return (
      <div>
        <section className="about">
          <h1 className="heading">
            <span>About Us</span>
          </h1>

          <div className="about-container">
          <div className="image">
            <img src={about} alt="" />
          </div>

          <div className="content">
            <span>Welcome to Our Shop</span>
            <h3>Device and Module</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              harum perspiciatis fugit soluta consequuntur facilis facere nulla
              dolores reiciendis et unde explicabo quaerat voluptas id, ab
              voluptate architecto? Corporis, deserunt.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus saepe voluptatem nulla iste delectus, ab nobis aliquid
              consequatur magni adipisci provident necessitatibus harum minima
              voluptatibus deserunt vel quia quis perspiciatis.
            </p>
            <Link to={"#"} className="btn">
              read more
            </Link>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h1 className="heading">
          Our <span>Gallery</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>
          
          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
