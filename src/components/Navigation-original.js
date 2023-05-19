import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

const Navigation = ({ data }) => {
  const sections = data.navigation;
  // Show or hide navigation.
  const [showNav, setShowNav] = useState(true);

  // Show or hide mobile navigation based on screen size.
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  // Checks the size of the window to show or hide the mobile navigation menu.
  const checkSize = () => {
    if (size < 767) {
      setShowNav(false);
      setShowMobileNav(true);
    } else if (size > 767) {
      setShowNav(true);
      setShowMobileNav(false);
    }
    setSize(window.innerWidth);
  };

  // useEffect to add an event listener for window size adjustments.
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    // cleanup Listener
    return () => {
      window.removeEventListener("resize", checkSize);
    };
    // eslint-disable-next-line
  }, [size]);

  return (
    <nav>
      {showMobileNav && (
        <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      )}

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
