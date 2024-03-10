import React, { Component } from "react";
import "./Form.scss"
class Form extends Component {
  render() {
    return (
      <div className="Form" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h1>Начните новый этап развития с нами</h1>
              <p>Remember, when you invest your capital is at risk.</p>
            </div>
            <div className="col-xl-6">
              <form className="d-flex flex-wrap">
                <input
                  type="text"
                  placeholder="Имя"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Hомер Tелефона"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Hазвание Kомпании"
                  className="form-control"
                />
                <button>Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
