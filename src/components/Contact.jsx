import Form from "./common/Form";

const Contact = ({ colorMode }) => {
  return (
    <section id="contact">
      <div className="container flex-row">
        <div className="contact-content flex-column">
          <h2 className="h2-underline">Want to Contact Me?</h2>
          <p>
            Please contact me by this email address{" "}
            <a
              href="mailto:surafelay@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              surafelay@gmail.com
            </a>{" "}
            or through the contact form below.
          </p>

          <Form colorMode={colorMode} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
