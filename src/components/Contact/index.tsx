import { Button, Form, Image, Input, Spin, message } from "antd";
import emailjs from "emailjs-com";
import "./index.scss";
import contact from "../../resources/icons/contact.svg";
import { useState } from "react";

type ContactFormValues = {
  fullName: string;
  email: string;
  message?: string;
};

const Contact = () => {
  const [form] = Form.useForm();
  const [isEmailSent, setEmailSent] = useState<boolean>(false);
  const onFinish = (values: ContactFormValues) => {
    const serviceID = "service_owrsw7p";
    const templateID = "template_vd8nsef";
    const userID = "UvkaCVlXq_MBlEYa3";

    setEmailSent(true)

    emailjs.send(serviceID, templateID, values, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        message.success("Message sent successfully!");
        form.resetFields();
        setEmailSent(false)
      },
      (err) => {
        console.log("FAILED...", err);
        message.error("Failed to send message.");
        setEmailSent(false)
      }
    );
  };

  return (
    <div className="contact" id="contact">
      <div className="heading-container">
        <h2 className="heading">Contact Me</h2>
        <span className="underline"></span>
      </div>
      <div className="contact-section">
        <div className="contact-info">
          <Image src={contact} preview={false} />
        </div>
        <div className="contact-form">
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
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item label="Message" name="message">
              <Input.TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {isEmailSent ? <Spin style={{color:'white'}} /> : "Send"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
