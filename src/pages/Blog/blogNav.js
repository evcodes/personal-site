import React, { useState } from "react";

import { Menu, Button } from "antd";
import {
  CodeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileTextOutlined,
  CloudOutlined,
  GithubOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "./blog-nav.css";

const { SubMenu } = Menu;

function BlogMenu() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ width: 256 }} className="menu-container">
      <Button
        type="primary"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ marginBottom: 16 }}
      >
        {collapsed === false ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}

        className = {collapsed ? 'nav-disabled' : 'nav-enabled'}

      >
        <SubMenu key="js" title="JavaScript" icon={<CodeOutlined />}>
        </SubMenu>

        <Menu.Item key="2" icon={<CloudOutlined />}>
          Cloud Development
        </Menu.Item>
        <Menu.Item key="3" icon={<GithubOutlined />}>
          Open Source
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<FormOutlined />}
          title="Technology"
        ></SubMenu>
      </Menu>
    </div>
  );
}

export default BlogMenu;
