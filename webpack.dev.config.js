// webpack是基于node.js的
//! 要使用commonjs规范导出一个对象

// commonjs规范
const path = require("path")
module.exports = {
    // webpack执⾏构建⼊⼝
    entry: "./src/index.js",
    // 输出
    output: {
        // 输出到那里，必须为绝对路径
        path: path.resolve(__dirname, "./build"),
        filename: "index.js"
    },
    mode: "development"
}