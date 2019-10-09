const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './lib'),
        // 输出的代码符合 CommonJS 模块化规范，以供给其它模块导入使用。
        libraryTarget: 'commonjs2'
    },
    mode: 'production',
    externals: /^(lodash)/,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    // 输出 Source Map
    devtool: 'source-map'
};
