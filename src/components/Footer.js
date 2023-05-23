import ProfileLinks from "./ProfileLinks";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer">
      <a href="#Home">
        <button className="btn-footer">
          <IoIosArrowUp />
        </button>
      </a>
      <ProfileLinks />
      <p>&copy; {new Date().getFullYear()} Stanley Ho</p>
    </section>
  );
};

export default Footer;
