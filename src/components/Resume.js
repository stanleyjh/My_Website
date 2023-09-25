import BAH from "../assets/images/company_logos/BAH.png";
import Costar from "../assets/images/company_logos/costar.png";
import Harborgroup from "../assets/images/company_logos/harborgroup.png";
import Leidos from "../assets/images/company_logos/Leidos.png";
import Illuminate from "../assets/images/company_logos/Illuminate.png";
import Synology from "../assets/images/company_logos/synology.png";
import ODU from "../assets/images/company_logos/odu.png";

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
            Full Stack Developer
            <img src={BAH} alt="Booz Allen Hamilton company logo" />
          </h3>
          <h4>
            <span>Booz Allen Hamilton</span>
            <span> • </span>
            <span>11/2022 - Present</span>
          </h4>
          <ul>
            <li>
              Perform research on the functionality of the Keycloak-Angular
              library to integrate within the current project.
            </li>
            <li>
              Gain experience in creating unit tests for Angular services using
              the Jest testing framework.
            </li>
            <li>
              Create GitLab pipeline and coverage badges to show key information
              about repository status.
            </li>
            <li>
              Collaborate in a Hackathon to build a global climate modeling
              application using NASA&#39;s climate datasets. With my proficiency
              in front-end development, I played an integral role in designing
              and developing the advanced tool.
            </li>
            <li>
              Implement version control best practices using Git, contributing
              to a collaborative environment.
            </li>
          </ul>
        </div>
        <div className="experience-6">
          <h3>
            JavaScript Developer
            <img src={Leidos} alt="Leidos company logo" />
          </h3>
          <h4>
            <span>Leidos</span>
            <span> • </span>
            <span>11/2021 - 10/2022</span>
          </h4>
          <ul>
            <li>
              Leveraged JavaScript, XML, and SQL to develop web applications in
              accordance with FAA policies.
            </li>
            <li>
              Written and tested SQL queries to establish data restrictions and
              performed data examination.
            </li>
            <li>
              Analyzed debug logs by stepping through code and setting
              breakpoints with Chrome DevTools.
            </li>
            <li>
              Conducted thorough application review to report findings on issues
              or areas to be improved upon.
            </li>
            <li>
              Created procedural and developmental method documentation to
              foster knowledge-sharing.
            </li>
          </ul>
        </div>
        <div className="experience-5">
          <h3>
            Software Developer{" "}
            <img
              src={Illuminate}
              alt="Illuminate Mission Solutions Company Logo"
            />
          </h3>
          <h4>
            <span>Illuminate Mission Solutions</span>
            <span> • </span>
            <span>10/2020 - 5/2021</span>
          </h4>
          <ul>
            <li>
              Developed an automated solution to integrate and deploy three
              open-source cybersecurity applications which substantially reduced
              the amount of build time from weeks to minutes.
            </li>
            <li>
              Applied Docker and Docker-Compose to deploy multiple server
              applications for re-use as well as configure a custom network and
              set environment variables for Docker containers.
            </li>
            <li>
              Implemented Nginx reverse proxy server to verify, secure, and
              re-route client requests.
            </li>
            <li>
              Created bash scripts in terminal using Linux to set file
              permissions, install various software components, generate digital
              certificates for client certificate authentication, and create/set
              user permissions.
            </li>
            <li>
              Worked closely with team members and utilized Jira's Kanban board
              to keep track of workflow.
            </li>
          </ul>
        </div>
        <div className="experience-4">
          <h3>
            Systems Support Specialist{" "}
            <img src={Costar} alt="Costar Group Company Logo" />
          </h3>
          <h4>
            <span>CoStar Group</span>
            <span> • </span>
            <span>5/2020 - 9/2020</span>
          </h4>
          <ul>
            <li>
              Supported internal employees on a range of systems including Mac
              and Windows OS, Apple and Android devices, network printers, and
              device peripherals.
            </li>
            <li>
              Worked with the Server, Network, and Security team to detect and
              resolve system issues and minimize downtime.
            </li>
            <li>
              Provided remote support using tools such as windows Remote Desktop
              and Microsoft Teams.
            </li>
            <li>
              Maintained Microsoft exchange mailboxes, distribution lists, and
              shared emails.
            </li>
          </ul>
        </div>
        <div className="experience-3">
          <h3>
            Technical Support Analyst{" "}
            <img src={Synology} alt="Synology company logo" />
          </h3>
          <h4>
            <span>Synology</span>
            <span> • </span>
            <span>6/2017 - 5/2018</span>
          </h4>
          <ul>
            <li>
              Assisted individuals and enterprises in resolving technical
              problems on hardware and software functionality for Network
              Attached Storages (NAS), Routers, and Network Surveillance Systems
              &#40;NSS&#41;.
            </li>
            <li>
              Worked with clients to determine what type of device would be best
              suited for their environment.
            </li>
            <li>
              Provided business continuity and disaster recovery strategies to
              clients by demonstrating NAS partitioning, Cloud Backup, and
              Snapshot Replication to prevent data loss and ransomware attacks.
            </li>
          </ul>
        </div>
        <div className="experience-2">
          <h3>
            IT Intern{" "}
            <img src={Harborgroup} alt="Harbor Group Management company logo" />
          </h3>
          <h4>
            <span>Harbor Group Management</span>
            <span> • </span>
            <span>6/2016 - 8/2016</span>
          </h4>
          <ul>
            <li>
              Spearheaded the research and development on a project primarily
              aimed at implementing a wireless network infrastructure and
              integrating innovative new technologies within a residential
              neighborhood.
            </li>
            <li>
              Supported internal employees with hardware or software issues
              either in person or using remote desktop.
            </li>
            <li>
              Managed user accounts in Windows Active Directory and administered
              Office 365 accounts.
            </li>
          </ul>
        </div>
        <div className="experience-1">
          <h3>
            IT Help Desk Lead{" "}
            <img src={ODU} alt="Old Dominion University logo" />
          </h3>
          <h4>
            <span>Old Dominion University</span>
            <span> • </span>
            <span>5/2015 - 5/2017</span>
          </h4>
          <ul>
            <li>
              Provided technical support to students and faculty in person,
              through email, or over the phone.
            </li>
            <li>
              Advised new employees on current workplace policies and
              procedures.
            </li>
            <li>
              Worked independently and as a team to resolve technical issues.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
