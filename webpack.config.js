const path = require('path');

module.exports = {
    /* 入口 */
    entry: path.join(__dirname, 'src/entry/index.js'),

    /** 输出 */
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
        }],
    },
};
