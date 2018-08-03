const path = require('path');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    mode: debug ? "development" : "production",
    entry: './front/Index.js',
    devtool: debug ? "sourcemap" : false,
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.min.js'
    },
    watch: debug,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                    }
                }
            }
        ]
    }
};