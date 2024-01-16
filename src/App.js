import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Secton1 from "./components/Secton1";
import Section2 from "./components/Section2";
import Testimonial from "./components/Testimonial";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Portfolio />
        <Service />
        <Secton1 />
        <Section2 />
        <Testimonial/>
      </div>
    );
  }
}
