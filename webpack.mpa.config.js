// entry: {
//   index: "./src/index.js",
//   list: "./src/list.js",
//   detail: "./src/detail.js"
// },

// new HtmlWebpackPlugin({
//   template: "./src/index.html",
//   filename: "index.html",
//   chunks: ["index","list"]
// }),

const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// const setMPA = () => {
//   const entry = {};
//   const htmlWebpackPlugin = [];
//   // 分析入口

//   return {
//     entry,
//     htmlWebpackPlugin,
//   };
// };

const setMPA = () => {
const entry = {};
const htmlWebpackPlugin = [];

  // 分析入口
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  // ! 过滤信息拿到入口文件名称
  console.log(entryFiles);

  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];   // 单独路径
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    console.log(match);

    const pageName = match && match[1];
    entry[pageName] = entryFile;

    // 配置 htmlplugin
    htmlWebpackPlugin.push(
      new HtmlWebpackPlugin({
        title: pageName,
        template: `src/index.html`,
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    );
  });

  console.log(entry);

  return {
    entry,
    htmlWebpackPlugin,
  };
};

const { entry, htmlWebpackPlugin } = setMPA();


module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name]_[chunkhash:8].js",
  },
  mode: "development",
  plugins: [...htmlWebpackPlugin],
};
