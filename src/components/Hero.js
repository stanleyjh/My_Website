import ProfileLinks from "./ProfileLinks";
import { FaDownload } from "react-icons/fa";
import Resume from "../assets/files/Stanley Ho Resume.pdf";

const Hero = () => {
  return (
    <header id="Home" className="hero">
      <div className="hero-info">
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
        <a href={Resume} download="Stanley Ho Resume.pdf">
          {/* Added tabIndex for accessibility since the <a> tag can already be tabbed to. */}
          <button className="btn" tabIndex="-1">
            Resume <FaDownload />
          </button>
        </a>
        {/* <button className="btn">Contact</button> */}
      </div>
    </header>
  );
};

export default Hero;
