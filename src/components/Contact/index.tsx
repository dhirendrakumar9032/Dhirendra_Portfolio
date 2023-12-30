import { useContext, useState } from "react";
import { Button, Form, Image, Input, Spin, message } from "antd";
import contact from "../../resources/icons/contact.svg";
import { sendEmail } from "./emailService";
import "./index.scss";
import { socialMediaLinks } from "../Home";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { NavigationContext } from "../../App";

type ContactFormValues = {
  fullName: string;
  email: string;
  message?: string;
};

const Contact = () => {
  const [form] = Form.useForm();
  const [isEmailSent, setEmailSent] = useState<boolean>(false);
  const { isLightsEnabled } = useContext(NavigationContext);

  const onFinish = (values: ContactFormValues) => {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    if (
      typeof serviceID === "undefined" ||
      typeof templateID === "undefined" ||
      typeof userID === "undefined"
    ) {
      console.error("EmailJS configuration is missing");
      message.error("Cannot send email at this time. Please try again later.");
      return;
    }

    setEmailSent(true);
    sendEmail(serviceID, templateID, userID, values)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          message.success("Message sent successfully!");
          setEmailSent(false);
        },
        (err) => {
          console.log("FAILED...", err);
          message.error("Failed to send message.");
          setEmailSent(false);
        }
      )
      .finally(() => {
        form.resetFields();
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="heading-container">
          <h2 className="heading">Contact Me</h2>
          <span className="underline"></span>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <Image src={contact} preview={false} />
          </div>
          <div
            className={`contact-form ${
              !isLightsEnabled && "contact-form-dark"
            }`}
          >
            <Form
              form={form}
              layout="vertical"
              className="form"
              onFinish={onFinish}
            >
              <h2>Get In Touch</h2>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  { required: true, message: "Please input your Full name!" },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item label="Message" name="message">
                <Input.TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {isEmailSent ? <Spin style={{ color: "white" }} /> : "Send"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <p className="address">
              <IoLocationOutline /> Kondapur,Hyderabad, Telanagan, 500081
            </p>
            <p className="phone">
              <VscCallOutgoing /> (+91) 8604390422
            </p>
            <p className="email">
              <TfiEmail /> dhirendra9032@gmail.com
            </p>
          </div>
          <div className="social-media-link">
            {socialMediaLinks.map(({ link, logo }, index) => (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="links"
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {logo}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="footer-rights">
          <p>© 2023 by Dhirendra Kumar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
