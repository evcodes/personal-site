import React, { useEffect, useState } from "react";
import "./blog.css";
import { Link } from "react-router-dom";

import { Row, Col, Typography, Card, Spin } from "antd";
import BlogMenu from "./blogNav";
import { getBlogPosts } from "../../components/contentManagment/blogPosts";

import { BlogPost } from "./blogPost";

//routing
import { useRouteMatch, Switch, Route } from "react-router-dom";

const { Title, Text } = Typography;

export default function Blog({ match }) {
  let { path, url } = useRouteMatch();

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function populatePosts() {
      const data = await getBlogPosts();
      console.log(data);
      setBlogData(data);
      setLoading(false);
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

      <div className="blog-card-container">
        {loading ? (
          <Spin className="blog-loader" tip="Loading posts..." />
        ) : blogData !== [] ? (
          blogData.map((post) => {
            return post["_deleted"] ? (
              <div />
            ) : (
              <Link to={`${url}/${post.id}`}>
                <Card id={post.id} title={post.title}>
                  <p>{post.category}</p>
                  <p>{post.summary}</p>
                </Card>
              </Link>
            );
          })
        ) : (
          ""
        )}
      </div>

      <Switch>
        <Route exact path={`${path}/:id`}>
          <BlogPost />
        </Route>
      </Switch>
    </div>
  );
}
