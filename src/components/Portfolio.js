import React, { Component } from "react";
import "./Portfolio.scss";
import BoxList from "./Boxlist";
class Portfolio extends Component {
  state = {
    portfolio: [
      {
        id: 1,
        image: "/images/p1.png",
        title: "8 min to read",
        text: "15 Latest Development in Webflow.",
      },
      {
        id: 2,
        image: "/images/p2.png",
        title: "12 min to read",
        text: "Create your wedding website",
      },
      {
        id: 3,
        image: "/images/p3.png",
        title: "13 min to read",
        text: "Schedule ceremony site tours",
      },
      {
        id: 4,
        image: "/images/p4.png",
        title: "9 min to read",
        text: "Write a sweet note to your partner",
      },
    ],
  };

  render() {
    const { portfolio } = this.state;
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
            {portfolio.map((item, index) => (
              <div className="col-md-3">
                <BoxList item={item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
