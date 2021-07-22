const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { //Loader para archivos Jss
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            "react-hot-loader/babel",
                            "jsx-control-statements"
                        ]
                    }
                }
            },
            { // Loader para css
                test: /\.css$/,
                use:  ['style-loader','css-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
    ],
};