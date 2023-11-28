const Form = () => {
  return (
    <form action="" className="flex-column">
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
