// webpack是基于node.js的
//! 要使用commonjs规范导出一个对象

// commonjs规范
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");


// ? 单页面入口打包 SPA
module.exports = {
  // webpack执⾏构建⼊⼝
  
  // 单页面部分
  // entry: "./src/index.js",
  // 输出
  // output: {
  //   // 输出到那里，必须为绝对路径
  //   path: path.resolve(__dirname, "./dist"),
  //   filename: "main.js",
  // },

  // 多页面部分
  entry: {
    index: "./src/index.js",
    list: "./src/list.js",
    detail: "./src/detail.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },


  // 模式
  mode: "development",
  // 处理模块
  module: {
    // 这些loder（加载器）是需要额外安装的
    //! loader 是由执行顺序的，自右往左
    rules: [
      // 处理图片
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash:8].[ext]",
              outputPath: "images/", // 将图片存放在images下
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              // 将多个style标签合并为一个
              injectType: "singletonStyleTag",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.woff2$/,
        use: ["file-loader"],
      },
      {
        test: /\.less$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // devtool: "source-map",  // 一般用于开发环境，生产环境的为none
  devServer: {
    contentBase: "./dist",
    port: 8081,
    open: true,
    // 热替换
    hotOnly: true, // 模块刷新，不会做页面刷新
    // 解决跨域（代理的原理）
    proxy: {
      // 当碰到/api时，直接服务器代理到9092接口
      "/api": {
        target: "http://localhost:9092",
      },
    },
  },
  // 作用于webpack的整个周期
  plugins: [
    // 多页面部分
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index","list"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "list.html",
      chunks: ["list"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "detail.html",
      chunks: ["detail"]
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[chunkhash:8].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
