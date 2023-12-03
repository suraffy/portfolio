import { useForm } from "@formspree/react";
import MessageSVG from "../../img/message-smile-jsx.svg";

const Form = () => {
  const [state, handleSubmit] = useForm("mrgwwkwv");
  if (state.succeeded) {
    return (
      <p className="successful-form">
        <span className="flex-row">
          <img src={MessageSVG} alt="Message Smile" />
        </span>
        <span>Thanks for your message — I'll be in touch soon!</span>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex-column">
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea
        rows="4"
        name="message"
        placeholder="Your Message"
        required
      ></textarea>
      <input type="submit" value="Send Message" />
    </form>
  );
};

export default Form;
