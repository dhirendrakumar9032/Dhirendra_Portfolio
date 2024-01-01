import { useContext, useState } from "react";
import { Button, Form, Image, Input, Spin, message } from "antd";
import contact from "../../resources/icons/contact.svg";
import { sendEmail } from "./emailService";
import { NavigationContext } from "../../App";
import { ContactFormValues } from "../../utils/types";
import Footer from "./Footer";
import "./index.scss";

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
      <Footer/>
    </>
  );
};

export default Contact;
