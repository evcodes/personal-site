import React from "react";

import { Link } from "react-router-dom";

//styling
import { Button, Typography } from "antd";
import "./home.css";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  // async function fetchPosts() {
  //   try {
  //     const postData = await API.graphql(graphqlOperation(listPosts));
  //     console.log(postData);
  //     const posts = postData.data.listPosts.items;
  //     setPosts(posts);
  //   } catch (err) {
  //     console.log("error fetching posts");
  //   }
  // }

  // async function addPost() {
  //   try {
  //     if (!formState.title || !formState.body) return;
  //     const post = { ...formState };
  //     setPosts([...posts, post]);
  //     setFormState(initialState);
  //     await API.graphql(graphqlOperation(createPost, { input: post }));
  //   } catch (err) {
  //     console.log("error creating post:", err);
  //   }
  // }

  return (
    <div className="home-container">
      <div className="landing-text-container">
        <Title>Eddy Varela</Title>
        <Paragraph className="paragraph-text">
          Hello, and thanks for stopping by! My name is Eddy and I am a
          <Text code>software engineer</Text>. Currently, I work for Amazon Web
          Services (AWS) with the awesome{" "}
          <a href="https://docs.amplify.aws" target="_blank" rel="noreferrer">
            Amplify team.{" "}
          </a>
          I specialize in web, mobile, and cloud technologies. Please contact me
          with any questions!{" "}
        </Paragraph>

        <Link to="/contact">
          <Button type="primary">Contact me</Button>
        </Link>
      </div>
      <AmplifyS3Image imgKey="profile-pic.JPG" />
    </div>
  );
}
