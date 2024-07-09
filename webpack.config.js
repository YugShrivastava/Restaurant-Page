const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: './index.js',
        homePage: './homePage.index.js',
        menuPage: './menuPage.index.js',
        aboutPage: './aboutPage.index.js',
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "head",
            scriptLoading: "defer",
        }),
    ],
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
