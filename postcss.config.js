const autoprefixer = require("autoprefixer");

module.exports = {
    plugin: [
        // 后面的为传递参数
        require('autoprefixer')({
            overrideBrowserslist: ["last 2 versions",">1%"]
        })
    ]
};