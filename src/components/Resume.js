const Resume = () => {
  return (
    <section id="Resume" className="resume">
      <div className="grid-education center-item max-width">
        <h2>
          <span>EDUCATION</span>
        </h2>
        <h3>Bachelors in Information Systems & Technology</h3>
        <h4>
          <span>Old Dominion University</span>
          <span> • </span>
          <span>May 2017</span>
        </h4>
      </div>
      <hr />
      <div className="grid-skills center-item max-width">
        <h2>
          <span>SKILLS & CERTIFICATIONS</span>
        </h2>
        <ul>
          <li>
            <p className="boldText">Languages: </p> JavaScript, Angular, React,
            SQL, HTML, CSS, XML
          </li>
          <li>
            <p className="boldText">Technologies: </p>VS Code, Keycloak, Jest,
            SQL Server Management Studio, Linux &#40;RHEL, CentOS 7.8&#41;,
            Shell Scripting, Docker, Nginx, PKI, Terminal, TCP/IP, Git, Github,
            Gitlab, Jira, VirtualBox, SDLC, WordPress
          </li>
          <li>
            <p className="boldText">Certifications: </p>CompTIA Security+
            &#40;2022&#41;
          </li>
        </ul>
      </div>
      <hr />
      <div className="grid-experience center-item max-width">
        <h2>
          <span>EXPERIENCE</span>
        </h2>
        <div className="experience-7">
          <h3>
            <span className="item1">Full Stack Developer</span>
            <span className="item2">Booz Allen Hamilton</span>
            <span className="item3">11/2021 - 10/2022</span>
          </h3>
        </div>
        <div className="experience-6">
          <h3>
            <span>JavaScript Developer</span>
            <span>Leidos</span>
            <span>11/2021 - 10/2022</span>
          </h3>
        </div>
        <div className="experience-5">
          <h3>
            <span>Software Developer</span>
            <span>Illuminate Mission Solutions</span>
            <span>10/2020 - 5/2021</span>
          </h3>
        </div>
        <div className="experience-4">
          <h3>
            <span>Systems Support Specialist</span>
            <span>CoStar Group</span>
            <span>5/2020 - 9/2020</span>
          </h3>
        </div>
        <div className="experience-3">
          <h3>
            <span>Technical Support Analyst</span>
            <span>Synology</span>
            <span>6/2017 - 5/2018</span>
          </h3>
        </div>
        <div className="experience-2">
          <h3>
            <span>IT Intern</span>
            <span>Harbor Group Management</span>
            <span>6/2016 - 8/2016</span>
          </h3>
        </div>
        <div className="experience-1">
          <h3>
            <span>IT Help Desk Lead</span>
            <span>Old Dominion University</span>
            <span>5/2015 - 5/2017</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Resume;
