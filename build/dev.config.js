const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
    ]
})