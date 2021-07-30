import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../../graphql/mutations";
import { listPosts } from "../../graphql/queries";

//styling
import { Button } from "antd";
import "./home.css";

import { Typography, Divider } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

const initialState = { title: "", body: "" };

export default function Home() {
  const [formState, setFormState] = useState(initialState);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      console.log(postData);
      const posts = postData.data.listPosts.items;
      setPosts(posts);
    } catch (err) {
      console.log("error fetching posts");
    }
  }

  async function addPost() {
    try {
      if (!formState.title || !formState.body) return;
      const post = { ...formState };
      setPosts([...posts, post]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPost, { input: post }));
    } catch (err) {
      console.log("error creating post:", err);
    }
  }

  return (
    <div className="home-container">
      <Title>Eddy Varela</Title>

      <div className="landing-text-container">
        <Paragraph className="paragraph-text">
          Hello, and thanks for stopping by! My name is Eddy and I am a
          <Text code>software engineer</Text>. Currently, I work for Amazon Web
          Services (AWS) with the awesome{" "}
          <a href="https://docs.amplify.aws" target="_blank">
            Amplify team.{" "}
          </a>
          I specialize in web, mobile, and cloud technologies. Please contact me
          with any questions!
        </Paragraph>

        <Button href="/contact" type="primary">
          Contact me
        </Button>
      </div>
    </div>
  );
}