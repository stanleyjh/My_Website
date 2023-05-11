import { useState } from "react";

const Navigation = ({ data }) => {
  const sections = data.navigation;
  const [showNav, setShowNav] = useState(false);

  console.log(showNav);
  return (
    <nav>
      <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
        hamburger
      </button>
      <div className={showNav ? "nav-list-active" : "nav-list"}>
        {showNav && (
          <ul>
            {sections.map((section, index) => {
              return (
                <li key={index}>
                  <a href={`#${section}`}>{section}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
