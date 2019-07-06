import React from "react";
import { Row, Col } from "antd";
// 默认直接找Header文件夹下面的index.js文件
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import "./style/common.less";

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row className="content">content</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
