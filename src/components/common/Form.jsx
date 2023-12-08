import { useForm } from "@formspree/react";

const Form = () => {
  const MessageSVGImgUrl = `${process.env.PUBLIC_URL}/img/message-smile.svg`;

  const [state, handleSubmit] = useForm("mrgwwkwv");

  if (state.submitting) {
    return (
      <p>
        <span>Sending...</span>
      </p>
    );
  }

  if (state.succeeded) {
    return (
      <p className="successful-form">
        <span className="flex-row">
          <img src={MessageSVGImgUrl} alt="Message Smile" />
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
