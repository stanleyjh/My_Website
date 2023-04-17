const Navigation = ({ data }) => {
  const sections = data.navigation;
  return (
    <nav>
      <ul>
        {sections.map((section, index) => {
          return <li key={index}>{section}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
