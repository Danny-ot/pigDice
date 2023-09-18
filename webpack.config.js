const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname , 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new EsLintPlugin({
            context: "compiler.context",
            eslintPath: "eslint",
            extensions: 'js',
            exclude: 'node_modules',
            fix: false,
            formatter: 'stylish',
            lintDirtyModulesOnly: false,
            threads: false,
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: false,
            quiet: false,
            outputReport: false
          }),
         new HtmlWebpackPlugin({
             title: 'pigDice',
             template: './src/index.html',
             inject: 'body'
         }),
    ],
    module: {
        rules : [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: 'img/[name].[hash].[ext]',
                        },
                    }
                ]
            },
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};