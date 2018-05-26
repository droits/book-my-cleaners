const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './main.js',            
        ],
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot)$/i, // For the file image file importing
                use: 'file-loader',
            },
            {
                test: /\.jsx?$/, // To load jsx files, loader used is babel-loader, which transpiles jsx to js
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: [
                        "transform-class-properties",
                        "transform-object-rest-spread"
                    ],
                    presets: ['es2015', 'react'] // presets are required to tell webpack which version we are using.
                }
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'], // used to make use of absolute import
        extensions: ['*', '.js', '.jsx', '.json'],
    },
    plugins: [
        new Visualizer({
            filename: './statistics.html' // statistics.html will view the bundle.js usages.
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
    ],
};

// Note: In production check sass-loader once.