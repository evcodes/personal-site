import React from "react";

import { Link } from "react-router-dom";

//styling
import { Button, Typography } from "antd";
import "./home.css";
import profilePic from "./profile-pic.JPG";
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  return (
    <div className="home-container">
      <div className="landing-text-container">
        <Title>Eddy Varela</Title>
        <Paragraph className="paragraph-text">
          Hello, and thanks for stopping by! My name is Eddy and I am a
          <Text code>software engineer.</Text>Currently, I work for Amazon Web
          Services (AWS) with the awesome{" "}
          <a href="https://docs.amplify.aws" target="_blank" rel="noreferrer">
            Amplify team.{" "}
          </a>
          I specialize in web, mobile, and cloud technologies. Please contact me
          with any questions!{" "}
        </Paragraph>

        <Link to="/contact">
          <Button id = "contact-button" type="primary">Contact me</Button>
        </Link>
      </div>

      <div>
        <img src={profilePic} id="landing-headshot" />
      </div>
    </div>
  );
}
