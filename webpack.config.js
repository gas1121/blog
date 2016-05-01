module.exports = {
    entry: {
        preHeader : "./themes/next/source/js/custom/pre-header.js",
        main : "./themes/next/source/js/custom/main.js",
        starHistory : "./themes/next/source/js/custom/star-history.js"
    },
    output: {
        path: __dirname + "/themes/next/source/js/custom/build",
        publicpath: "/js/custom/build/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
}