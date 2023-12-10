import React from "react";
import "./style.css";
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return(
    <div className="container">
      <Info />
      <About />
      <Skills />
      <Project />
      <Interests />
      <Footer />
    </div>
  );
}