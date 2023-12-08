import { useEffect } from "react";
import { useForm } from "@formspree/react";

const Form = () => {
  const smileMessageSVGImgUrl = `${process.env.PUBLIC_URL}/img/message-smile.svg`;
  const sendingMessageSVGImgUrl = `${process.env.PUBLIC_URL}/img/wired-flat-177-envelope-send.webp`;

  const [state, handleSubmit] = useForm("mrgwwkwv");

  useEffect(() => {
    const img = new Image();
    const img2 = new Image();

    img.src = smileMessageSVGImgUrl;
    img.src = sendingMessageSVGImgUrl;
  }, []);

  if (state.submitting) {
    return (
      <p>
        <img src={sendingMessageSVGImgUrl} alt="Sending Message" />
        <span>Sending...</span>
      </p>
    );
  }

  if (state.succeeded) {
    return (
      <p className="successful-form">
        <span className="flex-row">
          <img
            src={smileMessageSVGImgUrl}
            alt="Message Smile"
            className="smile-message"
          />
        </span>
        <span>Thanks for your message — I'll be in touch soon!</span>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex-column">
      {state.errors && <p className="error-message">Message not send!!</p>}
      <input type="text" name="name" placeholder="Your Name" required />
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
