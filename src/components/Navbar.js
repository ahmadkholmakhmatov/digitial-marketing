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
                <a href="#home">Портфолио</a>
              </li>
              <li>
                <a href="#home">Услуги и Тарифы</a>
              </li>
              <li>
                <a href="#home">О Компании</a>
              </li>
              <li>
                <a href="#home">FAQ</a>
              </li>
            </ul>
            <div className="right-box">
              <a href="#home" className="btn btn-button">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
        <div className=" mobile-navbar">
          <div className="container-fluid-md">
            <div className="content-box ">
              <div className="logo">
                <img className="mobile-logo" style={{width:"140px"}} src="/images/logo.png" alt="" />
              </div>
              <div className="right-box">
                <a className="btn btn-button" href="#home">
                  Оставить заявку
                </a>
                <a className="burger" href="#">
                  <span class="burger part-1"></span>
                  <span class="burger part-2"></span>
                  <span class="burger part-3"></span>
                </a>
              </div>
              <div className="right-menu">
                <ul>
                  <li>
                    <a href="#home">Портфолио</a>
                  </li>
                  <li>
                    <a href="#home">Услуги и Тарифы</a>
                  </li>
                  <li>
                    <a href="#home">О Компании</a>
                  </li>
                  <li>
                    <a href="#home">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
