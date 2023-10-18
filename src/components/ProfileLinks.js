import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

const ProfileLinks = () => {
  return (
    <div className="profileLinks">
      <a href="https://github.com/stanleyjh" target="_blank" rel="noreferrer">
        <FaGithub className="reactIcons" />
      </a>
      <a href="https://gitlab.com/DEVstanley" target="_blank" rel="noreferrer">
        <FaGitlab className="reactIcons" />
      </a>
      <a
        href="https://www.linkedin.com/in/stanleyjh/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="reactIcons" />
      </a>
    </div>
  );
};

export default ProfileLinks;
