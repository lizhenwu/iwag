const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: '../src/index.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),   // 必须是绝对路径
        filename: '[chunkhash].bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new htmlPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: 'button test'
        })
    ]
}