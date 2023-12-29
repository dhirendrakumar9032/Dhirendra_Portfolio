import { Button, Form, Image, Input, message } from "antd";
import "./index.scss";
import contact from "../../resources/icons/contact.svg";

type ContactFormValues = {
  fullName: string;
  email: string;
  message?: string;
};

const Contact = () => {
  const onFinish = (values: ContactFormValues) => {
    message.success("Message sent successfully!");
    debugger;
    console.log(values);
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
          <Form layout="vertical" className="form" onFinish={onFinish}>
            <h2>Get In Touch</h2>
            <Form.Item label="Full Name" name="fullName"  rules={[{ required: true, message: 'Please input your Full name!' }]}>
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item label="Email" name="email"  rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item label="Message" name="message">
              <Input.TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
