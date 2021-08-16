import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Styling
import { Menu} from "antd";
import {
  HomeOutlined,
  SmileOutlined,
  FormOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "./nav.css";

// Pages for router
import RouteSwitcher from "./switch";

export default function Nav() {
  const [selectedroute, setSelectedRoute] = useState("home");

  return (
    <div >
      <Router>
        <Menu
          onClick={(e) => {
            setSelectedRoute(e.key);
          }}
          selectedroute={selectedroute}
          defaultActiveFirst={selectedroute}
          mode="horizontal"
          className="navigation"
          theme = "dark"
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<SmileOutlined />}>
            <Link to="/about/">About</Link>
          </Menu.Item>

          <Menu.Item key="blog" icon={<BookOutlined />}>
            <Link to="/blog/">Blog</Link>
          </Menu.Item>

          <Menu.Item key="contact" icon={<FormOutlined />}>
            <Link to="/contact/">Contact</Link>
          </Menu.Item>
        </Menu>

        <RouteSwitcher/>
      </Router>
    </div>
  );
}
