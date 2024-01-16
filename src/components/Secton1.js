import React, { Component } from "react";
import "./Section1.scss";
class Secton1 extends Component {
  render() {
    return (
      <div className="section-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src="/images/phone.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className="title">3 преимущество работы с нами</div>
              <div className="mini-container d-flex justify-content-center">
                <div className="circle">
                  <img src="/images/chart.png" alt="" />
                </div>
                <div>
                  <div className="title-inner">Инновации в каждом проекте</div>
                  <div className="body-text">
                    "Мы предоставляем передовые технологии и инновационные
                    решения, чтобы ваш проект всегда выделялся."
                  </div>
                </div>
              </div>
              <div className="step-2 d-flex align-items-center">
                <div className="circle">
                  <img src="/images/dollar.png" alt="" />
                </div>
                <div className="body-text">Step 2</div>
              </div>
              <div className="step-3 d-flex align-items-center">
                <div className="circle">
                  <img src="/images/message.png" alt="" />
                </div>
                <div className="body-text">Step 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Secton1;
