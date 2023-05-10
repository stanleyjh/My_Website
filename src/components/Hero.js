import ProfileLinks from "./ProfileLinks";

const Hero = () => {
  return (
    <header className="hero">
      <div className="heroText">
        <h1>Hello!</h1>
        <p>
          My name is Stanley Ho and I'm a self-taught Full Stack Software
          Developer currently working at Booz Allen Hamilton. I enjoy
          exercising, watching movies, playing billiards, and travelling.
        </p>
        <ProfileLinks />
        <button className="btn">Resume</button>
        {/* <button className="btn">Contact</button> */}
      </div>
    </header>
  );
};

export default Hero;
