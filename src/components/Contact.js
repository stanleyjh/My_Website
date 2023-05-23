const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get in touch!</h2>
      <div className="contact--mobile">
        <p>stanleyho619@gmail.com</p>
        <p>Leesburg, VA</p>
        <p>linkedin</p>
        <form>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Name" /> <br />
          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />{" "}
          <br />
          <label for="message"></label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message"
          />{" "}
          <br />
          <input type="submit" value="Send" /> <br />
          <input type="reset" value="Clear"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
