//! es新特性库  完整的
// import "@babel/polyfill"

// import { add } from './other.js';    // esmodel规范
// const json = require("./index.json");  // commonjs模块


// console.log(add(1,2),json);
// import ("./index.less")
// import ("./a.css")
// import pic from "./logo.png"
// console.log(pic);

// var img = new Image();
// img.src = pic;

// var root = document.getElementById("root");
// root.append(img)

// console.log("hello webpack!!!!");

// mock.js
// 项目  需求评审  前端给出工时 服务端给出接口文档时间
// 联调 前端依赖于后端接口，可以mock数据

// import axios from 'axios'

// axios.get("/api/info").then(res => {
//     console.log(res);
// })
//! HMR支持style-loader  css处理方式 不支持抽离成独立文件的方式
// import ("./index.css")
// var btn = document.createElement("button");
// btn.innerHTML = "新增";
// document.body.appendChild(btn)

// btn.onclick = function(){
//     var div = document.createElement("div");
//     div.innerHTML = "item";
//     document.body.appendChild(div)
// }


// import counter from "./counter";
// import number from "./number";
// counter();
// number();
//  ? js模块 HRM 需要手动监听需要HMR的模块，当该模块额内容发生改变，会触发回调
// if (module.hot) {   // 判断有没有启动HMR功能
//      第一个参数为监听的回调
//   module.hot.accept("./number.js", function() {
 
//     document.body.removeChild(document.getElementById("number"));
//     number();
//   });
// }


// babel会从入口分析依赖 ->AST（抽象语法树）->通过语法转换规则转换代码->生成代码
// const arr = [new Promise(() => {}), new Promise(() => {})];
// arr.map(item => {
//  console.log(item);
// });



// import React, { Component } from "react";
// import ReactDom from "react-dom";
// class App extends Component {
//  render() {
//  return <div>hello world</div>;
//  }
// }
// ReactDom.render(<App />, document.getElementById("app"));





console.log("index page")





