import React from "react";
// Components
import About from "../components/About";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
