import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import FormInput from "./input";
import "./contact.css";

import { API } from "aws-amplify";
import { createContactFormEntry } from "../../graphql/mutations";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

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
    await API.graphql({
      query: createContactFormEntry,
      variables: {
        input: formData,
      },
    });
  };

  return (
    <div>
      <br />
      <Row className="contact-form-container">
        <Col className="contact-form-header">
          <Title className="contact-form-header-text">Contact me</Title>
        </Col>
        <Col className="contact-form-input-fields">
          <Form
            name="nest-messages"
            onFinish={handleContactFormSubmit}
            validateMessages={validateMessages}
          >
            <Row className="contact-form-row">
              <Col>
                <FormInput
                  className = "first-name-input"
                  name={["firstName"]}
                  label="First name"
                  rules={[{ required: true }]}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  value={formData.firstName}
                />
              </Col>
              <Col>
                <FormInput
                  name={["lastName"]}
                  label="Last name"
                  rules={[{ required: true }]}
                  onChange={(e) =>
                    setFormData({ ...formData, lastNa: e.target.value })
                  }
                  value={formData.lastName}
                />
              </Col>
            </Row>

            <FormInput
              className="large-input"
              name={["email"]}
              label="Email"
              rules={[{ required: true }]}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
              value={formData.emailAddress}
            />

            <Form.Item
              name={["message"]}
              label="Message"
              rules={[{ required: true }]}
            >
              <TextArea
                rows={3}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
              />
            </Form.Item>
            <FormInput
              name={["website"]}
              label="Website"
              rules={[{ required: false }]}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              value={formData.website}
            />
            <Paragraph style={{ textAlign: "right" }}>
              <span style={{ color: "red" }}>*</span> is required
            </Paragraph>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="contact-form-submit"
              >
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
