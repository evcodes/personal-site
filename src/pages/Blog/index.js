import React, { useEffect, useState } from "react";
import "./blog.css";

import { Row, Col, Typography } from "antd";
import BlogMenu from "./blogNav";
import { getBlogPosts } from "../../components/contentManagment/blogPosts";
const { Title, Text } = Typography;

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function populatePosts() {
      const data = await getBlogPosts();
      console.log(data);
      setBlogData(data);
    }
    populatePosts();
  }, []);
  return (
    <div className="blog-container">
      <Row>
        <br />

        <Col>
          <BlogMenu />
        </Col>
        <Col span={6} />

        <Col span={10} className="blog-header">
          <Title>Blog</Title>
          <Text>
            I write about JavaScript, Cloud, Open Source, and my experience in
            the technology sector.
          </Text>
        </Col>
      </Row>
        {blogData !== []
          ? blogData.map((post) => {
              return (
                <p key={post.id}>
                  {" "}
                  {post.title} - {post.body}
                </p>
              );
            })
          : ""}
    </div>
  );
}
