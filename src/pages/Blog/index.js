import React, { useEffect, useState } from "react";
import "./blog.css";
import { useHistory } from "react-router-dom";

import { Row, Col, Typography, Card, Spin } from "antd";
import BlogMenu from "./blogNav";
import { getBlogPosts } from "../../components/contentManagment/blogPosts";

const { Title, Text } = Typography;

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    async function populatePosts() {
      const data = await getBlogPosts();
      console.log(data);
      setBlogData(data);
      setLoading(false);
    }
    populatePosts();
  }, []);

  function goToBlogDetailPage(blogData) {
    history.push(`/blog/${blogData.title}`);
  }
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

      <div className="blog-card-container">
        {loading ? (
          <Spin className="blog-loader" tip="Loading posts..." />
        ) : blogData !== [] ? (
          blogData.map((post) => {
            return post["_deleted"] ? (
              <div />
            ) : (
              <Card
                id={post.id}
                title={post.title}
                onClick={() => {
                  goToBlogDetailPage(post);
                }}
              >
                <p>{post.category}</p>
                <p>{post.summary}</p>
              </Card>
            );
          })
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
