import React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  // 这个生命周期函数接收父组件传递过来的参数
  componentWillReceiveProps(newProps) {
    console.log("will props" + newProps.name);
  }

  // 调用了setState就会触发的生命周期函数
  shouldComponentUpdate() {
    console.log("should update");
    return true;
    // 如果return false后面就不执行了.
  }

  componentWillUpdate() {
    console.log("will update");
  }

  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    return (
      <div>
        <p>这里是子组件,测试子组件的生命周期</p>
        <p>{this.props.name}</p>
      </div>
    ); 
  }
}
