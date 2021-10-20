import React from "react";
import "./about.css";
import { Typography, Divider } from "antd";
const { Title, Text } = Typography;

export default function About() {
  return (
    <div className="about-container">
      <Title style={{ textAlign: "left" }}>About</Title>

      {/*
        TODO: find resume doc and put link to about section
      <div className="resources-container">
        <Text>
          <a href = >Resume</a>
        </Text>
        <Text>GitHub</Text>
        <Text>Captain Code</Text>
        <Text>Youtube</Text>
      </div> */}
      <Divider orientation="left">Brief Bio</Divider>

      <Text className="about-text-body">
        &emsp; My name is Eddy Varela and I started writing code at Williams
        College. After graduating with a bachelors degree in Computer Science, I
        joined Amazon Web Services. Although my trajectory may seem linear,
        before Amazon I worked for a local food startup, education startup, and
        at my old high school as a media specialist.
        <br />
        <br />
        &emsp; Amazon seemed like a good fit for me because I have always been
        interested in the intersection of business and technology. In my eyes,
        the team that I joined was empowering web and mobile engineers to build
        scalable, robust, and higly reliable applications quickly through a
        library that interfaces with Amazon's vast array of cloud services.
      </Text>
      <div className="about-text-container"></div>
      <div className="portfolio-container">
        <Divider orientation="left">Portfolio</Divider>

        <div className="portfolio-text-container">
          <Text>
            &emsp; I have experience developing mobile and web solutions for
            small businesses. I have helped business owners in several contexts
            such as migrating away from older technologies and onto the cloud. I
            have dabbled in web (specifically React), mobile (Android, iOS, and
            React Native), and AWS. For any inqueries check out{" "}
            <a href="http://www.captaincode.cc">Captain Code</a>.
          </Text>
        </div>

        <div className="portfolio-item-container"></div>
      </div>

      <div className="video-container">
        <Divider orientation="left">Video series</Divider>
        <Text>
          I will soon be publishing videos on Youtube teaching developers how to
          user AWS Amplify.
        </Text>
      </div>
    </div>
  );
}
