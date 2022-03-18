const path = require("path");

module.exports = {
    mode: "development",
    entry:"./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public/js")
    },
    devServer: {
        static: path.resolve(__dirname, "public"),
        port: 9000,
        hot: true
    }
}