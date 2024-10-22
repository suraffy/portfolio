import { useRef } from "react";
import Form from "./common/Form";

const Contact = ({ colorMode }) => {
  const ContactSectionRef = useRef();

  const handleSendMessage = () => {
    ContactSectionRef.current.scrollIntoView();
  };

  return (
    <section id="contact" ref={ContactSectionRef}>
      <div className="container flex-row">
        <div className="contact-content flex-column">
          <h2 className="h2-underline">Want to Contact Me?</h2>
          <Form colorMode={colorMode} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
