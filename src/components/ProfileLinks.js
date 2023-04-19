import { FaLinkedin, FaGithub, FaGitlab, FaCodepen } from "react-icons/fa";

const ProfileLinks = () => {
  return (
    <div>
      <FaGithub className="reactIcons" />
      <FaGitlab className="reactIcons" />
      <FaCodepen className="reactIcons" />
      <FaLinkedin className="reactIcons" />
    </div>
  );
};

export default ProfileLinks;
