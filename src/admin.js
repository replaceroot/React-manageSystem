import React from "react";
import { Row, Col } from "antd";
// 默认直接找Header文件夹下面的index.js文件
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import Home from "./pages/home/";
import "./style/common.less";

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">
            <Home />
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
