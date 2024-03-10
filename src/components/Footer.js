import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container-fluid-md container-lg">
          <div className="row">
            <div className="col-3 first-col">
              <h3>Digital Marketing</h3>
              <p>Tools for the world’s most customer-centric businesses</p>
              <div className="socials">
                <div className="social">
                  <i class="bi bi-instagram"></i>
                </div>
                <div className="social-white ">
                  <i class="bi bi-linkedin rounded-circle"></i>
                </div>
                <div className="facebook">
                  {" "}
                  <i class="bi bi-facebook"></i>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="title"> Pages</div>
              <ul>
                <li>Портфолио</li>
                <li>Услуги и Тарифы</li>
                <li>О Компании</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-2">
              <div className="title"> Info</div>
              <ul>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
            <div className="col-2">
              <div className="title">Get in touch</div>
              <div className="email">Hello@digital marketing.co</div>
            </div>
            <div className="col-3 last-col">
              <div className="title">Newsletter</div>
              <div className="insight">
                Sign upfor the latest news, company insights, and Whirl updates.
              </div>
              <div className="input">
                <input type="phone" placeholder="Номер телефона" />
                <div className="send">
                  <i class="bi bi-send-fill"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="bottom-text">
            2023 Digital Marketing. All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}
