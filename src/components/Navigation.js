import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navigation = ({ data }) => {
  const sections = data.navigation;
  // Show or hide navigation.
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div id="hide-mobile" className="mobile-nav">
        <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu className="hamburger-icon" />
        </button>

        <div className={showNav ? "nav-list-active" : "nav-list"}>
          {showNav && (
            <ul>
              {sections.map((section, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`#${section}`}
                      onClick={() => setShowNav(!showNav)}
                    >
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
      </div>
      <div id="hide-desktop" className="nav--desktop">
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
      </div>
    </nav>
  );
};

export default Navigation;
