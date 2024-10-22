import { useForm } from "@formspree/react";
import sendingMessageLightImgUrl from "../../assets/images/wired-flat-177-envelope-send-light.webp";
import sendingMessageDarkImgUrl from "../../assets/images/wired-flat-177-envelope-send-dark.webp";
import smileMessageLightSVGImgUrl from "../../assets/images/message-smile-light.svg";
import smileMessageDarkSVGImgUrl from "../../assets/images/message-smile-dark.svg";
import { motion } from "framer-motion";

const Form = ({ colorMode, onSendMessage }) => {
  const [state, handleSubmit] = useForm("mrgwwkwv");

  return (
    <motion.div
      layout
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.5 },
      }}
    >
      <div
        style={{
          display: `${
            !state?.succeeded && !state?.submitting ? "block" : "none"
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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            onSendMessage();
          }}
          className="flex-column"
        >
          {state?.errors && (
            <p className="error-message">Message not sent, Please try again.</p>
          )}
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+$"
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

      <motion.div layout>
        <p
          style={{
            height: "100px",
            display: `${state?.submitting ? "block" : "none"}`,
          }}
        >
          <img
            src={
              colorMode === "dark"
                ? sendingMessageLightImgUrl
                : sendingMessageDarkImgUrl
            }
            alt=""
          />
          <span style={{ marginLeft: "10px" }}>Sending...</span>
        </p>
      </motion.div>

      <motion.div layout>
        <p
          className="successful-form"
          style={{
            height: "100px",
            display: `${state?.succeeded ? "block" : "none"}`,
          }}
        >
          <span className="flex-row">
            <img
              src={
                colorMode === "dark"
                  ? smileMessageDarkSVGImgUrl
                  : smileMessageLightSVGImgUrl
              }
              alt=""
              className="smile-message"
            />
          </span>
          <span>Thank you for your message — I'll be in touch soon!</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Form;
