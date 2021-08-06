import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import "./contact.css";

const { Title } = Typography;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function Contact() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <br/>
      <Row>
        <Col span={6}/>
        <Col span={12}>
        <Title>Contact me</Title>
          <Form
            className = "contact-form-container"
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "website"]} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span = {6}/>
      </Row>
    </div>
  );
}
