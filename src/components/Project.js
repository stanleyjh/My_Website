import { useState } from "react";

const Project = (props) => {
  const [show, setShow] = useState(false);
  // imageName property is a unique image name to reference a project image.
  const { about, image, imageName, link, name } = props;
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image[`${imageName}`]} alt={`${name} project`} />
      </a>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        <h3>&#91; {name} &#93;</h3>
      </button>
      {show && <p>{about}</p>}
    </div>
  );
};

export default Project;
