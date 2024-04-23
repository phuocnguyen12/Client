import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import delivery from "../../assets/icon-delivery.png"
import device from "../../assets/icon-device.png"
import "./HomePage.scss"

const HomePage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <section className="Home" id="home">
        <div className="content">
          <h3>
            devices and <span>modules</span> Product for Your
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            ducimus quisquam voluptas minima blanditiis aliquam quis expedita
            fugit quibusdam doloribus exercitationem similique enim, eveniet rem
            dolorem praesentium iure incidunt voluptates?
          </p>
          <Link to={"*"} className="btn">
            Shop now
          </Link>
        </div>
      </section>

      <section className="features">
        <h1 className="heading">
          Our <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={device} alt="device" />
            <h3>devices and modules</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum ducimus quisquam voluptas minima blanditiis aliquam
              quis expedita fugit quibusdam doloribus exercitationem similique
              enim, eveniet rem dolorem praesentium iure incidunt voluptates?
            </p>
            <Link to={"#"} className="btn">
              Read Now
            </Link>
          </div>
          <div className="box">
            <img src={device} alt="device" />
            <h3>Easy Payments</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum ducimus quisquam voluptas minima blanditiis aliquam
              quis expedita fugit quibusdam doloribus exercitationem similique
              enim, eveniet rem dolorem praesentium iure incidunt voluptates?
            </p>
            <Link to={"#"} className="btn">
                Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
