const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const envHMG = require('./env/env.hmg.json');

const env = Object.keys(envHMG).map((key) => { return {
    [key]: JSON.stringify(envHMG[key])
}})

const DefinePlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('homolog'),
        ...Object.assign({}, ...env) 
    },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' })

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: "vendor",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },
    plugins: [DefinePlugin, HTMLWebpackPluginConfig]
}
