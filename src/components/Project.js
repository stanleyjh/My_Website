import { useState } from "react";

const Project = (props) => {
  const [show, setShow] = useState(false);
  const { about, image, link, name } = props;
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={`image.${name}`} alt={`${name} project`} />
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
  // <div key={index}>
  //   <a href={link} target="_blank" rel="noreferrer">
  //     <img src={`image.${name}`} alt={`${name} project`} />
  //   </a>
  //   <button
  //     onClick={() => {
  //       setShow(!show);
  //     }}
  //   >
  //     <h3>&#91; {name} &#93;</h3>
  //   </button>
  //   {show && <p>{about}</p>}
  // </div>;
};

export default Project;
