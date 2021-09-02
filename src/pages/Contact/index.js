import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import "./contact.css";

import { API } from "aws-amplify";
import { createContactFormEntry } from "../../graphql/mutations";

const { Title } = Typography;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const initialFormData = {
  firstName: "",
  lastName: "",
  website: "",
  emailAddress: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);

  const handleContactFormSubmit = async () => {
    console.log(formData);
    await API.graphql({
      query: createContactFormEntry,
      variables: {
        input: formData,
      },
    });
  };

  // function onFinish(values) {
  //   console.log("Success:", values);
  // }

  return (
    <div>
      <br />
      <Row>
        <Col span={6} />
        <Col span={12}>
          <Title>Contact me</Title>
          <Form
            className="contact-form-container"
            name="nest-messages"
            onFinish={handleContactFormSubmit}
            validateMessages={validateMessages}
          >
            <Row className="contact-form-row">
              <Col>
                <Form.Item
                  name={["user", "name"]}
                  label="First name"
                  rules={[{ required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    value={formData.firstName}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name={"name"} label="Last name">
                  <Input
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    value={formData.lastName}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name={["user", "email"]}
                  label="Email Address"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input
                    onChange={(e) =>
                      setFormData({ ...formData, emailAddress: e.target.value })
                    }
                    value={formData.emailAddress}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name={["user", "website"]} label="Website">
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                value={formData.website}
              />
            </Form.Item>
            <Form.Item
              name={["user", "message"]}
              label="Message"
              rules={[{ required: true }]}
            >
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={6} />
      </Row>
    </div>
  );
}
