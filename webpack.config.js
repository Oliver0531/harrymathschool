const path = require('path');

module.exports = {

    entry: {
        'main': ["./src/main.tsx"],
        'page1': ["./src/page1.tsx"],
        'page2': ["./src/page2.tsx"]
    },

    devtool: "source-map",

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: '[name]_library',
    },
    devtool: "source-map",

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    externals: {
        "jquery": "jQuery"
    }

};