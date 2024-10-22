import Form from "./common/Form";

const Contact = ({ colorMode }) => {
  return (
    <section id="contact">
      <div className="container flex-row">
        <div className="contact-content flex-column">
          <h2 className="h2-underline">Want to Contact Me?</h2>
          <Form colorMode={colorMode} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
