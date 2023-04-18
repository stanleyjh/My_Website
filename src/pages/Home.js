import React from "react";
// Components
import Navigation from "../components/Navigation";
import About from "../components/About";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Styles
import "../styles/global.css";
// Data
import data from "../data/data";

const Home = () => {
  return (
    <React.Fragment>
      <Navigation data={data} />
      <About />
      <Header />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
