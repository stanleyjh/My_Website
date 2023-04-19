import ProfileLinks from "./ProfileLinks";

const Hero = () => {
  return (
    <header className="hero">
      <div className="heroText">
        <h1>Welcome</h1>
        <p>
          My name is Stanley Ho and I'm a self-taught Full Stack Software
          Developer currently working at Booz Allen Hamilton.
        </p>
        <p>
          In my free time, I play billards, catch up on the latest Movies, or
          explore the DMV area.
        </p>
        <ProfileLinks />
        <button className="btn">button1</button>
        <button className="btn">button2</button>
      </div>
    </header>
  );
};

export default Hero;
