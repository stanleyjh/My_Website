import React from "react";
import { useState } from "react";

const Project = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  // imageName property is a unique image name to reference a project image.
  const { about, image, imageName, link, name } = props;
  return (
    <React.Fragment>
      {/* mobile screen */}
      <div id="hide-mobile" className="project-div--mobile">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image[`${imageName}`]} alt={`${name} project`} />
        </a>
        <button
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          <p className="underline">{name}</p>
        </button>
        {showDescription && <p>{about}</p>}
      </div>
      {/* desktop screen */}
      <div id="hide-desktop" className="project-div--desktop">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image[`${imageName}`]} alt={`${name} project`} />
        </a>
        <div>
          <h3>{name}</h3>
          <p>{about}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
