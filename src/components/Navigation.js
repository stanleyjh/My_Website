import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
// import { useMediaQuery } from "react-responsive";

const Navigation = ({ data }) => {
  const sections = data.navigation;
  const [showNav, setShowNav] = useState(false);
  const [count, setCount] = useState(0);

  // will be using useEffect to listen for window size adjustments.
  useEffect(() => {
    console.log("effect");
  }, []);

  console.log(showNav);
  return (
    <nav>
      <p style={{ color: "white" }}>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        btn
      </button>
      <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu className="hamburger-icon" />
      </button>
      <div className={showNav ? "nav-list-active" : "nav-list"}>
        {showNav && (
          <ul>
            {sections.map((section, index) => {
              return (
                <li key={index}>
                  <a href={`#${section}`} onClick={() => setShowNav(!showNav)}>
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* A large transparent button after the navigation bar to close the navigation bar.*/}
      {showNav && (
        <div className="close-nav">
          <button
            className="close-nav-btn"
            onClick={() => setShowNav(!showNav)}
          ></button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
