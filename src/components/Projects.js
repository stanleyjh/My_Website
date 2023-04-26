import React, { useState } from "react";

const Projects = () => {
  const [show, setShow] = useState(false);

  console.log(show);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Project 1 name
        </button>
        <a href="https://www.stanleyho.org">
          <img
            src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
            alt="project"
          />
        </a>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          show/hide
        </button>
        {show && (
          <p>
            DESCRIPTION: Excepteur non adipisicing laboris officia ipsum
            reprehenderit magna. Ex amet in proident minim duis cillum sit id
            mollit veniam. Cillum officia tempor officia do. Dolore enim aute
            anim sint elit occaecat consequat tempor dolor in laborum qui velit.
            Minim dolore adipisicing elit ea sint ut. Irure cillum ex laboris
            commodo labore cupidatat excepteur incididunt duis tempor nisi ea
            elit. Amet pariatur sunt deserunt excepteur.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
