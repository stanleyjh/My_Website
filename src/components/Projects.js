import data from "../data/data";
import Project from "./Project";

const Projects = () => {
  const { projects } = data;
  return (
    <section id="Projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </section>
  );
};

export default Projects;
