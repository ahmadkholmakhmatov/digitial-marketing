import React, { Component } from "react";
import "./Service.scss";
class Service extends Component {
  service = [
    {
      id: 1,
      image: "/images/service.png",
      title: "СММ (социальные медиа маркетинг)",
      body: "Продвижение и управление вашим брендом в социальных сетях, создание контента, анализ эффективности кампаний.",
    },
    {
      id: 2,
      image: "/images/service.png",
      title: "Платные рекламы",
      body: "Размещение рекламных материалов на платформах, таких как Facebook Ads, Google Ads, Яндекс.Директ, социальные сети, для привлечения целевой аудитории.",
    },
    {
      id: 3,
      image: "/images/service.png",
      title: "Брендинг",
      body: "Разработка уникального стиля бренда, логотипа, фирменного стиля, а также стратегии его продвижения на рынке.",
    },
    {
      id: 4,
      image: "/images/service.png",
      title: "Веб-сайт",
      body: "Создание и разработка сайтов с учетом индивидуальных потребностей клиента, оптимизация для поисковых систем, поддержка и обновление контента.",
    },
  ];
  render() {
    return (
      <div className="service">
        <div className="container">
          <div className="row row1">
            <div className="col-md-12 text-center">
              <div className="title">Услуги и Тарифы</div>
              <div className="body">
                Наши услуги нацелены на максимальное удовлетворение потребностей
                клиентов. От разработки креативных концепций до стратегического
                маркетинга — выбирайте из наших тарифов и получайте результаты,
                которые превзойдут ваши ожидания.
              </div>
            </div>
          </div>
          <div className="row services">
            {this.service.map((item, index) => (
              <div className="col-md-3">
                <div className="card h-100" key={index}>
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
export default Service;
