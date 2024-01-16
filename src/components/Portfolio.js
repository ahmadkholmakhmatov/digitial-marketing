import React, { Component } from "react";
import "./Portfolio.scss";
class Portfolio extends Component {
  portfolio = [
    {
      id: 1,
      image: "/images/p1.png",
      info: "8 min to read",
      body: "15 Latest Development in Webflow.",
    },
    {
      id: 2,
      image: "/images/p2.png",
      info: "12 min to read",
      body: "Create your wedding website",
    },
    {
      id: 3,
      image: "/images/p3.png",
      info: "13 min to read",
      body: "Schedule ceremony site tours",
    },
    {
      id: 4,
      image: "/images/p4.png",
      info: "9 min to read",
      body: "Write a sweet note to your partner",
    },
  ];
  render() {
    return (
      <div className="portfolio">
        <div className="container">
          <div className="row row1">
            <div className="col-md-12 text-center">
              <div className="title">Портфолио</div>
              <div className="body">
                Ознакомьтесь с нашим портфолио, где каждый проект — это история
                успеха. Мы гордимся достижениями наших клиентов и готовы
                воплотить в жизнь вашу уникальную идею.
              </div>
            </div>
          </div>
          <div className="row infos">
            <div className="col-md-3">
              <div className="body">
                <img src="/images/pa1.png" alt="" />
                <span>5+</span>
              </div>
              <div className="title">Лет опыта</div>
            </div>
            <div className="col-md-3">
              <div className="body">
                <img src="/images/pa2.png" alt="" />
                <span>5+</span>
              </div>
              <div className="title">Лет опыта</div>
            </div>
            <div className="col-md-3">
              <div className="body">
                <img src="/images/pa3.png" alt="" />
                <span>5+</span>
              </div>
              <div className="title">Лет опыта</div>
            </div>
            <div className="col-md-3">
              <div className="body">
                <img src="/images/pa4.png" alt="" />
                <span>5+</span>
              </div>
              <div className="title">Лет опыта</div>
            </div>
          </div>
          <div className="row portfolios">
            {this.portfolio.map((item, index) => (
              <div className="col-md-3">
                <div className="card h-100" key={index}>
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <div className="card-info">{item.info}</div>
                    <div className="card-text">{item.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
