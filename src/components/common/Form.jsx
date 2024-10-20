import { useForm } from "@formspree/react";
import sendingMessageLightImgUrl from "../../assets/images/wired-flat-177-envelope-send-light.webp";
import sendingMessageDarkImgUrl from "../../assets/images/wired-flat-177-envelope-send-dark.webp";
import smileMessageLightSVGImgUrl from "../../assets/images/message-smile-light.svg";
import smileMessageDarkSVGImgUrl from "../../assets/images/message-smile-dark.svg";

const Form = ({ colorMode }) => {
  const [state, handleSubmit] = useForm("mrgwwkwv");

  return (
    <>
      <div
        style={{
          display: `${
            !state.succeeded && !state.submitting ? "block" : "none"
          }`,
        }}
      >
        <p>
          Please contact me by this email address{" "}
          <a href="mailto:surafelay@gmail.com" target="_blank" rel="noreferrer">
            surafelay@gmail.com
          </a>{" "}
          or through the contact form below.
        </p>
        <div style={{ height: "0px" }}>&nbsp;</div>{" "}
        {/* prevents margin collapse */}
        <form onSubmit={handleSubmit} className="flex-column">
          {state.errors && <p className="error-message">Message not sent!!</p>}
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
      </div>

      <p
        className="successful-form"
        style={{
          height: "100px",
          display: `${state.succeeded ? "block" : "none"}`,
        }}
      >
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
        <span>Thank you for your message — I'll be in touch soon!</span>
      </p>

      <p
        style={{
          height: "100px",
          display: `${state.submitting ? "block" : "none"}`,
        }}
      >
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
    </>
  );
};

export default Form;
