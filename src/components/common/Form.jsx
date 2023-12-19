import { useEffect } from "react";
import { useForm } from "@formspree/react";

const Form = ({ colorMode }) => {
  const smileMessageLightSVGImgUrl = `${process.env.PUBLIC_URL}/img/message-smile-light.svg`;
  const smileMessageDarkSVGImgUrl = `${process.env.PUBLIC_URL}/img/message-smile-dark.svg`;
  const sendingMessageLightImgUrl = `${process.env.PUBLIC_URL}/img/wired-flat-177-envelope-send-light.webp`;
  const sendingMessageDarkImgUrl = `${process.env.PUBLIC_URL}/img/wired-flat-177-envelope-send-dark.webp`;

  const [state, handleSubmit] = useForm("mrgwwkwv");

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();

    img1.src = smileMessageLightSVGImgUrl;
    img2.src = smileMessageDarkSVGImgUrl;
    img3.src = sendingMessageLightImgUrl;
    img4.src = sendingMessageDarkImgUrl;
  }, [
    smileMessageLightSVGImgUrl,
    smileMessageDarkSVGImgUrl,
    sendingMessageLightImgUrl,
    sendingMessageDarkImgUrl,
  ]);

  if (state.submitting) {
    return (
      <p>
        <img
          src={
            colorMode === "dark"
              ? sendingMessageLightImgUrl
              : sendingMessageDarkImgUrl
          }
          alt="Sending Message"
        />
        <span style={{ marginLeft: "10px" }}>Sending...</span>
      </p>
    );
  }

  if (state.succeeded) {
    return (
      <p className="successful-form">
        <span className="flex-row">
          <img
            src={
              colorMode === "dark"
                ? smileMessageDarkSVGImgUrl
                : smileMessageLightSVGImgUrl
            }
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
