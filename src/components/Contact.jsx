import { useEffect, useState } from "react";
import Form from "./common/Form";

const Contact = ({ colorMode }) => {
  const smileMessageLightSVGImgUrl = `${process.env.PUBLIC_URL}/img/message-smile-light.svg`;
  const smileMessageDarkSVGImgUrl = `${process.env.PUBLIC_URL}/img/message-smile-dark.svg`;
  const sendingMessageLightImgUrl = `${process.env.PUBLIC_URL}/img/wired-flat-177-envelope-send-light.webp`;
  const sendingMessageDarkImgUrl = `${process.env.PUBLIC_URL}/img/wired-flat-177-envelope-send-dark.webp`;

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
