import React from "react";
import device from "../../assets/ModuleESP.png"
import delivery from "../../assets/icon-delivery.png"
import module from "../../assets/ROM-BIOS.png" 
import user from "../../assets/User.png"
import "./ReviewPage.scss"

const ReviewPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>Client's Review</h1>
      </div>

      <section className="info-container">
        <div className="info">
          <img src={delivery} alt="" />
          <div className="content">
            <h3>Fast Delivery</h3>
            <span>Within 30 minutes</span>
          </div>
        </div>

        <div className="info">
          <img src={device} alt="" />
          <div className="content">
            <h3>Fast Default</h3>
            <span>Within 30 minutes</span>
          </div>
        </div>

        <div className="info">
          <img src={module} alt="" />
          <div className="content">
            <h3>Fast Default</h3>
            <span>Within 30 minutes</span>
          </div>
        </div>

        <section className="review">
          <div className="box">
            <div className="user">
              <img src={user} alt="" />
              <div className="info">
                <h3>Phuoc</h3>
                <span>Happy Client</span>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
              nobis id fugit sequi, illum minima non placeat eveniet explicabo
              esse voluptatum?
            </p>
          </div>

          <div className="box">
            <div className="user">
              <img src={user} alt="" />
              <div className="info">
                <h3>Phuoc</h3>
                <span>Happy Client</span>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
              nobis id fugit sequi, illum minima non placeat eveniet explicabo
              esse voluptatum?
            </p>
          </div>

          <div className="box">
            <div className="user">
              <img src={user} alt="" />
              <div className="info">
                <h3>Phuoc</h3>
                <span>Happy Client</span>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
              nobis id fugit sequi, illum minima non placeat eveniet explicabo
              esse voluptatum?
            </p>
          </div>

          <div className="box">
            <div className="user">
              <img src={user} alt="" />
              <div className="info">
                <h3>Phuoc</h3>
                <span>Happy Client</span>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
              nobis id fugit sequi, illum minima non placeat eveniet explicabo
              esse voluptatum?
            </p>
          </div>

          <div className="box">
            <div className="user">
              <img src={user} alt="" />
              <div className="info">
                <h3>Phuoc</h3>
                <span>Happy Client</span>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
              nobis id fugit sequi, illum minima non placeat eveniet explicabo
              esse voluptatum?
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ReviewPage;
