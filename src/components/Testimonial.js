import React, { Component } from "react";
import Slider from "react-slick";
import "./Testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "transparent",
        position: "absolute",
        top: "-20%",
        right: "5%",
        display: "inline",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "-20%",
        left: "90%",
        display: "inline",
      }}
      onClick={onClick}
    />
  );
}
class Testimonial extends Component {
  testimonial = [
    {
      body: "Great movie podcasts add to the conversation around a film and avoid mere self-indulgence - here’s a breakdown of the best.",
      name: "Darrell Steward",
      currentStatus: "Happy User",
      bodyImage: "/images/Frame.png",
      profImage: "/images/prof1.png",
    },
    {
      body: "For athletes, high altitude produces two contradictory effects on performance. For explosive events ",
      name: "Marvin McKinney",
      currentStatus: "Happy User",
      bodyImage: "/images/Frame.png",
      profImage: "/images/prof2.png",
    },
    {
      body: "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
      name: "Cameron Williamson",
      currentStatus: "Happy User",
      bodyImage: "/images/Frame.png",
      profImage: "/images/prof3.png",
    },
    {
      body: "Great movie podcasts add to the conversation around a film and avoid mere self-indulgence - here’s a breakdown of the best.",
      name: "Darrell Steward",
      currentStatus: "Happy User",
      bodyImage: "/images/Frame.png",
      profImage: "/images/prof1.png",
    },
    {
      body: "For athletes, high altitude produces two contradictory effects on performance. For explosive events ",
      name: "Marvin McKinney",
      currentStatus: "Happy User",
      bodyImage: "/images/Frame.png",
      profImage: "/images/prof2.png",
    },
    {
      body: "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
      name: "Cameron Williamson",
      currentStatus: "Happy User",
      bodyImage: "/images/Frame.png",
      profImage: "/images/prof3.png",
    },
  ];
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow className={"nextArrow"} />,
      prevArrow: <SamplePrevArrow className={"prevArrow"} />,
    };
    return (
      <div className="testimonial">
        <div className="container">
          <h2>Что говорят о нас наши клиенты ?</h2>
          <div className="row">
            <Slider {...settings}>
              {this.testimonial.map((item, index) => (
                <div className="col-md-4 column" key={item.index}>
                  <div className="card h-100">
                    <img src={item?.bodyImage} alt="" />

                    <div className="card-text">{item?.body}</div>

                    <div className="card-bottom">
                      <img src={item.profImage} alt="" />
                      <div className="userInfo">
                        <div className="name">{item.name}</div>
                        <div className="status">{item.currentStatus}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonial;
