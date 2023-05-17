// testing for showing or hiding information based on screen size.

import { useState, useEffect } from "react";
const Test = () => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  const [bool, setBool] = useState("false");

  const checkSize = () => {
    console.log(size);
    if (size > 767) {
      setBool("false");
    } else if (size < 767) {
      setBool("true");
    }
    setSize(window.innerWidth);
    console.log(bool);
  };

  useEffect(() => {
    console.log("useEffecct");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>{size}px</h2>
      <h2>{bool}</h2>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        btn
      </button>
    </div>
  );
};

export default Test;
