import ProfileLinks from "./ProfileLinks";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section className="footer">
      <ProfileLinks />
      <p>&copy; {date} Stanley Ho</p>
    </section>
  );
};

export default Footer;
