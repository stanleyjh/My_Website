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
      {showNav && (
        <ul>
          {sections.map((section, index) => {
            return <li key={index}>{section}</li>;
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
