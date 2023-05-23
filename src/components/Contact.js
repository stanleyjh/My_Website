const Contact = () => {
  return (
    <section className="contact">
      <h2>Get in touch!</h2>
      <div className="contact--mobile">
        <p>stanleyho619@gmail.com</p>
        <p>Leesburg, VA</p>
        <p>linkedin</p>
        <form>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Name" />
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <label for="message"></label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message"
          />
          <input type="submit" />
          <input type="reset" value="Clear"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
