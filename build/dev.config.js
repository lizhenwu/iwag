const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3100
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
        new BrowserSyncPlugin(
            // BrowserSync options
            {
              // browse to http://localhost:3000/ during development
              host: 'localhost',
              port: 3000,
              // proxy the Webpack Dev Server endpoint
              // (which should be serving on http://localhost:3100/)
              // through BrowserSync
              proxy: 'http://localhost:3100/'
            },
            // plugin options
            {
              // prevent BrowserSync from reloading the page
              // and let Webpack Dev Server take care of this
              reload: false
            }
          )
    ]
})