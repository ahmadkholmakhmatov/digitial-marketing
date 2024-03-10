import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FAQ.scss";
class FAQ extends Component {
  firstSetAccordion = [
    {
      specificClass: "flush-collapseOne",
      question: "Какие результаты я могу ожидать от ваших услуг?",
      body: "Результаты от услуг зависят от ваших целей и выбранного тарифного плана, но обычно это повышение узнаваемости бренда, увеличение трафика на сайт и улучшение вовлеченности аудитории",
    },

    {
      specificClass: "flush-collapseThree",
      question: "Каковы стоимость и структура вашего тарифного плана? ",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },

    {
      specificClass: "flush-collapseFive",
      question: "How does encryption protect data?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  secondSetAccordion = [
    {
      specificClass: "flush-collapseTwos",
      question: "Сколько времени займет достижение желаемых результатов? ",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      specificClass: "flush-collapseFour",
      question: "Предоставляете ли вы гарантии качества выполненной работы?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  render() {
    return (
      <div className="FAQ">
        <div className="container">
          <h1 className="question">Часто задаваемые вопросы (FAQ)</h1>
          <div className="row">
            <div className="col-xl-6 column">
              {this.firstSetAccordion.map((item, index) => (
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                 
                >
                  <div className="accordion-item"  key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.specificClass}`}
                        aria-expanded="false"
                        aria-controls={item.specificClass}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={item.specificClass}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-6 column">
              {this.secondSetAccordion.map((item, index) => (
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item"  key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.specificClass}`}
                        aria-expanded="false"
                        aria-controls={item.specificClass}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={item.specificClass}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
