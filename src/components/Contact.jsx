const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="flex-column">
          <h2 className="h2-underline">Want to Contact Me?</h2>
          <p>
            Please contact me by this email address
            <a href="mailto:surafelay@gmail.com" target="_blank">
              surafelay@gmail.com
            </a>
            or through the contact form below.
          </p>
          <form action="" className="flex-column">
            <input type="text" name="name" placeholder="Your Name" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
