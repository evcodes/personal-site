import React from "react";
import "./blog.css";

import { Row, Col, Typography } from "antd";
import BlogMenu from "./blogNav";
const { Title, Text } = Typography;

export default function Blog() {
  return (
    <div className = "blog-container">
      <Row>
        <br />

        <Col>
          <BlogMenu />
        </Col>
        <Col span={6} />

        <Col span={10} className="blog-header">
          <Title>Blog</Title>
          <Text>I write about JavaScript, Cloud, Open Source, and my experience in the technology sector.</Text>
        </Col>
      </Row>
    </div>
  );
}
