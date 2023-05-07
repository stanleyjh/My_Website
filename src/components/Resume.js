const Resume = () => {
  return (
    <section className="resume">
      <div className="grid-education">
        <h2>EDUCATION</h2>
        <h3>Bachelors in Information Systems & Technology</h3>
        <h4>
          <span>Old Dominion University</span>
          <span> • </span>
          <span>May 2017</span>
        </h4>
      </div>
      <hr />
      <div className="grid-skills">
        <h2 className="title-underline">SKILLS & CERTIFICATIONS</h2>
        <ul>
          <li>
            <p className="boldText">Languages: </p> JavaScript, React, SQL,
            HTML, CSS, XML
          </li>
          <li>
            <p className="boldText">Technologies: </p>VS Code, SQL Server
            Management Studio, Linux &#40;RHEL, CentOS 7.8&#41;, Shell
            Scripting, Docker, Nginx, PKI, Terminal, TCP/IP, Git, Github,
            Gitlab, Jira, VirtualBox, SDLC, WordPress
          </li>
          <li>
            <p className="boldText">Certifications: </p>CompTIA Security+
            &#40;2022&#41;
          </li>
        </ul>
      </div>
      <hr />
      <div className="grid-experience">
        <h2>EXPERIENCE</h2>
        <h3>Full Stack Developer</h3>
        <h4>
          <span>Booz Allen Hamilton</span>
          <span> • </span>
          <span>11/2022 - Present</span>
        </h4>
        <ul>
          <li>
            Utilize educational resources to develop software development
            skillset with React, Node, and Gitlab to design and build software
            and system components.
          </li>
          <li>
            Collaborate in a Hackathon to build a global climate modeling
            application using NASA&#39;s climate datasets. With my proficiency
            in front-end development, I played an integral role in designing and
            developing the advanced tool.
          </li>
          <li>
            Participate in daily Scrum meetings to discuss progress, blockers,
            and upcoming tasks.
          </li>
        </ul>
        <h3>JavaScript Developer</h3>
        <h4>
          <span>Leidos</span>
          <span> • </span>
          <span>11/2021 - 10/2022</span>
        </h4>
        <ul>
          <li>
            Developed web applications using JavaScript and XML according to the
            FAA&#39;s standards, policies, and procedures.
          </li>
          <li>
            Written and test SQL queries to build data restrictions and examine
            business data to apply them on Archibus pages.
          </li>
          <li>
            Provided support to federal and contract employees using the
            Archibus system.
          </li>
          <li>
            Analyzed debug logs by stepping through code and setting breakpoints
            using Chrome DevTools.
          </li>
          <li>
            Reviewed the Archibus application and report findings on issues or
            areas to be improved upon.
          </li>
          <li>
            Created procedural documentation and document the evolution of
            development methods for future replication.
          </li>
        </ul>
        <h3>Software Developer &#40;Contract&#41;</h3>
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
            Worked closely with team members and utilized Jira's Kanban board to
            keep track of workflow.
          </li>
          <li>
            Routinely created technical documentation on build processes and
            resolved issues.
          </li>
        </ul>
        <h3>Systems Support Specialist</h3>
        <h4>
          <span>CoStar Group</span>
          <span> • </span>
          <span>5/2020 - 9/2020</span>
        </h4>
        <ul>
          <li>
            Supported internal employees on a range of systems including Mac and
            Windows OS, Apple and Android devices, network printers, and device
            peripherals.
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
          <li>
            Informed management of potential issues and identify problem trends.
          </li>
          <li>Imaged and deployed Windows systems using Acronis.</li>
        </ul>
        <h3>Technical Support Analyst</h3>
        <h4>
          <span>Synology</span>
          <span> • </span>
          <span>6/2017 - 5/2018</span>
        </h4>
        <ul>
          <li>
            Assisted individuals and enterprises in resolving technical problems
            on hardware and software functionality for Network Attached Storages
            (NAS), Routers, and Network Surveillance Systems &#40;NSS&#41;.
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
          <li>Analyzed debug logs for misconfigurations and errors.</li>
        </ul>
        <h3>IT Intern</h3>
        <h4>
          <span>Harbor Group Management</span>
          <span> • </span>
          <span>6/2016 - 8/2016</span>
        </h4>
        <ul>
          <li>
            Worked on a project to implement a wireless network infrastructure
            and new technologies in a residential area.
          </li>
          <li>
            Supported internal employees with hardware or software issues either
            in person or using remote desktop.
          </li>
          <li>
            Managed user accounts in Windows Active Directory and administered
            Office 365 accounts.
          </li>
        </ul>
        <h3>IT Help Desk Lead</h3>
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
            Advised new employees on current workplace policies and procedures.
          </li>
          <li>
            Worked independently and as a team to resolve technical issues.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
