import Me from "../assets/images/me3.jpg";
import {
  FaLocationArrow,
  FaRegStar,
  FaGraduationCap,
  FaRegBuilding,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="About" className="about">
      <img src={Me} alt="self portrait" />
      <div className="center-item max-width">
        <h2>About Me</h2>
        <p>
          I graduated Old Dominion University with a Bachelor's Degree in
          Information Systems & Technology and after five years of working in IT
          industry, I've developed a strong foundation in technology. Overtime,
          I came to the realization that it wasn't the career path that aligned
          with my passion. With a desire to explore another area of the tech
          industry and expand my skillset, I made the decision to pivot my
          career to software development on October 27th, 2019. Through
          extensive self-study and hands-on practice, I've developed a passion
          for programming and I've immersed myself in learning new technologies
          and best practices. As I embark on this new chapter, I'm eager to
          leverage my existing knowledge and experience while continuing to grow
          and develop as a software developer.
        </p>
        <ul>
          <li>
            <FaLocationArrow />
            <span className="boldText"> Location: </span>
            Leesburg, VA
          </li>
          <li>
            <FaRegStar />
            <span className="boldText"> Interests: </span>
            Exercising, Billiards, Movies, Travelling
          </li>
          <li>
            <FaGraduationCap />
            <span className="boldText"> Study: </span>
            Old Dominion University
          </li>
          <li>
            <FaRegBuilding />
            <span className="boldText"> Employment: </span>
            Booz Allen Hamilton
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
