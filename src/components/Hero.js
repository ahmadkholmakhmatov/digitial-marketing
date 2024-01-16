import React, { Component } from "react";
import "./Hero.scss";
class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="badge">Digital Marketing</div>
              <div className="title">
                Приведите свой бизнес к новым высотам с нашей компанией!
              </div>
              <div className="body">Надежные решения для вашего успеха.</div>
              <button className="btn">Бесплатная Консультация</button>
            </div>
            <div className="col-md-5">
              <div className="image-box">
                <img src="images/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
