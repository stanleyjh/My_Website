import data from "../data/data";
import Project from "./Project";

const Projects = () => {
  const { projects } = data;
  return (
    <section id="Projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
