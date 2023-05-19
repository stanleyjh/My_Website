import ProfileLinks from "./ProfileLinks";
import { FaDownload } from "react-icons/fa";
// import Resume from "";

const Hero = () => {
  return (
    <header id="Home" className="hero">
      <div className="hero-text">
        <h1>Hello!</h1>
        <p>
          My name is Stanley Ho and I'm a self-taught{" "}
          <b>Full Stack Software Developer</b> currently working at Booz Allen
          Hamilton.
        </p>
        <p>
          In my free time, I enjoy Exercising, playing Billiards, catching up on
          the latest Movies, and Travelling.
        </p>
        <ProfileLinks />
        <a
          href="../assets/files/Stanley Ho Resume.pdf"
          download="Stanley Ho Resume"
        >
          <button className="btn">
            Resume <FaDownload />
          </button>
        </a>
        {/* <button className="btn">Contact</button> */}
      </div>
    </header>
  );
};

export default Hero;
