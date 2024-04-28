import React from "react";
import user from "../../assets/User.png";
import "./ReviewPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewPage = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        Customers <span>Review</span>
      </h1>

      <div className="reviews-container">
        <div className="box">
          <img src={user} alt="" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          
          <h3>Ivan Nicholas</h3>

          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>

          <h3>Ivan Nicholas</h3>
          
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          
          <h3>Ivan Nicholas</h3>
          
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>

          <h3>Ivan Nicholas</h3>

          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>

          <h3>Ivan Nicholas</h3>

          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
