function number() {
  var div = document.createElement("div");
  div.setAttribute("id", "number");
  div.innerHTML = 10000;
  document.body.appendChild(div);
}
export default number;

//MPA多⻚⾯打包通⽤⽅案
// const setMPA = () => {
//     const entry = {};
//     const htmlWebpackPlugins = [];
    
//     return {
//         entry,
//         htmlWebpackPlugins
//     };
// };
// const { entry, htmlWebpackPlugins } = setMPA();