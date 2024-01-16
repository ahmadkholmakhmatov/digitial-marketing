import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <>
        <header className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <p>Команда экспертов по маркетингу и созданию сайтов.</p>
              <a href="#home">Learn more</a>
            </div>
          </div>
        </header>
        <main id="navbar">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#home">
                <img src="images/logo.png" alt="logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#home">
                      Портфолио
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#home">
                      Услуги и Тарифы
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#home">
                      О Компании
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#home">
                      FAQ
                    </a>
                  </li>
                </ul>
                <button class="btn btn-success" type="submit">
                  Оставить заявку
                </button>
              </div>
            </div>
          </nav>
        </main>
      </>
    );
  }
}
export default Navbar;
