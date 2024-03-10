import React, { Component } from "react";
import "./Section2.scss";
import BoxList from "./Boxlist";
class Section2 extends Component {
  state = {
    priorites: [
      {
        id: 1,
        image: "/images/s21.png",
        title: "Инновации в каждом проекте",
        text: "Мы предоставляем передовые технологии и инновационные решения, чтобы ваш проект всегда выделялся.",
      },
      {
        id: 2,
        image: "/images/s22.png",
        title: "Личный подход",
        text: "У нас нет шаблонов. Работая с нами, вы получаете индивидуальное внимание и решения, соответствующие вашим потребностям.",
      },
      {
        id: 3,
        image: "/images/s23.png",
        title: "Экспертность без компромиссов",
        text: "Наша команда опытных профессионалов гарантирует высший уровень профессионализма в каждом аспекте вашего проекта.",
      },
    ],
  };

  render() {
    const { priorites } = this.state;
    return (
      <div className="section-2">
        <div className="container">
          <div className="row row1">
            <div className="col-md-12 text-center">
              <div className="title">Ваш проект всегда в приоритете?</div>
            </div>
          </div>
          <div className="row priorites">
            {priorites.map((item, index) => (
              <div className="col-md-4" key={index}>
                <BoxList item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Section2;
