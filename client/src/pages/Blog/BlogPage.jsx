import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import blog from "../../assets/blog.jpg";
import "./BlogPage.scss";

const BlogPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>Our Blog</h1>
      </div>

      <section className="blogs">
        <h1 className="title">
          Our <span>Blog</span>
          <Link className="link" to={"#"}>
            View All
          </Link>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog} alt="" />
            </div>

            <div className="content">
              <div className="icons">
                <Link className="icon-item" to={"#"}>
                  <FontAwesomeIcon className="item" icon={faCalendarDays} />
                  27th April 2024
                </Link>
                <Link className="icon-item" to={"#"}>
                  {" "}
                  <FontAwesomeIcon className="item" icon={faUser} /> by admin
                </Link>
              </div>
              <h3>Blog Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vero ducimus repellendus iure ad maiores vitae ipsum,
                rem porro? Delectus, at. Minima iure quas veritatis voluptates
                porro quos iusto voluptatem.
              </p>
              <Link to={"#"} className="btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
