const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    devtool: 'inline-source-map',
    /* 入口 */
    entry: [
        hotMiddlewareScript,
        './src/entry/index.js',
    ],

    /** 输出 */
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
            include: __dirname,
        },
        // css处理
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        // 图片处理
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        },
        // 处理字体
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        },
        ],

    },
};
