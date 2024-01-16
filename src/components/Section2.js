import React, { Component } from "react";
import "./Section2.scss";
class Section2 extends Component {
  priorites = [
    {
      id: 1,
      image: "/images/s21.png",
      title: "Инновации в каждом проекте",
      body: "Мы предоставляем передовые технологии и инновационные решения, чтобы ваш проект всегда выделялся.",
    },
    {
      id: 2,
      image: "/images/s22.png",
      title: "Личный подход",
      body: "У нас нет шаблонов. Работая с нами, вы получаете индивидуальное внимание и решения, соответствующие вашим потребностям.",
    },
    {
      id: 3,
      image: "/images/s23.png",
      title: "Экспертность без компромиссов",
      body: "Наша команда опытных профессионалов гарантирует высший уровень профессионализма в каждом аспекте вашего проекта.",
    },
  ];
  render() {
    return (
      <div className="section-2">
        <div className="container">
          <div className="row row1">
            <div className="col-md-12 text-center">
              <div className="title">Ваш проект всегда в приоритете?</div>
            </div>
          </div>
          <div className="row priorites">
            {this.priorites.map((item, index) => (
              <div className="col-md-4">
                <div className="card h-100 " key={index}>
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <div className="card-info">{item.title}</div>
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
export default Section2;
