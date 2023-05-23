import React from "react";
// Components
import Navigation from "../components/Navigation";
import About from "../components/About";
// import Schedule from "../components/Schedule";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Styles
import "../styles/desktop.css";
import "../styles/mobile.css";
// Data
import data from "../data/data";

const Home = () => {
  return (
    <React.Fragment>
      <Navigation data={data} />
      <Hero />
      <About />
      {/* <Schedule /> */}
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
