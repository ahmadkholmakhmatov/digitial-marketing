import React, { Component } from "react";
import "./global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Secton1 from "./components/Secton1";
import Section2 from "./components/Section2";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Portfolio />
        <Service />
        <Secton1 />
        <Section2 />
        <Testimonial />
        <Form />
        <FAQ />
        <Footer/>
      </div>
    );
  }
}
