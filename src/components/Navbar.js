import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container desktop-navbar">
          <div className="content">
            <div className="logo">
              <img className="img-fluid" src="images/logo.png" alt="" />
            </div>
            <ul>
              <li>
                <a href="#portfolio">Портфолио</a>
              </li>
              <li>
                <a href="#service">Услуги и Тарифы</a>
              </li>
              <li>
                <a href="#about">О Компании</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
            <div className="right-box">
              <a href="#contact" className="btn btn-button">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
