import React from "react";
// Components
// import Test from "../components/Test";
import Navigation from "../components/Navigation";
import About from "../components/About";
// import Schedule from "../components/Schedule";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Styles
import "../styles/global.css";
// Data
import data from "../data/data";

const Home = () => {
  return (
    <React.Fragment>
      {/* <Test /> */}
      <Navigation data={data} />
      <Hero />
      <About />
      {/* <Schedule /> */}
      <Resume />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
