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
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
            ,{
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    }, {
                    loader: 'less-loader', options: {
                            sourceMap: true
                        }
                    }],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new htmlPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: 'button test'
        })
    ]
}