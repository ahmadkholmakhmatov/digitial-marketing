import React, { Component } from "react";
import "./Service.scss";
import BoxList from "./Boxlist";
class Service extends Component {
  state = {
    service: [
      {
        id: 1,
        image: "/images/service.png",
        title: "СММ (социальные медиа маркетинг)",
        text: "Продвижение и управление вашим брендом в социальных сетях, создание контента, анализ эффективности кампаний.",
      },
      {
        id: 2,
        image: "/images/service.png",
        title: "Платные рекламы",
        text: "Размещение рекламных материалов на платформах, таких как Facebook Ads, Google Ads, Яндекс.Директ, социальные сети, для привлечения целевой аудитории.",
      },
      {
        id: 3,
        image: "/images/service.png",
        title: "Брендинг",
        text: "Разработка уникального стиля бренда, логотипа, фирменного стиля, а также стратегии его продвижения на рынке.",
      },
      {
        id: 4,
        image: "/images/service.png",
        title: "Веб-сайт",
        text: "Создание и разработка сайтов с учетом индивидуальных потребностей клиента, оптимизация для поисковых систем, поддержка и обновление контента.",
      },
    ],
  };

  render() {
    const { service } = this.state;
    return (
      <div className="service" id="service">
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
            {service.map((item, index) => (
              <div className="col-md-3" key={index}>
                <BoxList item={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
