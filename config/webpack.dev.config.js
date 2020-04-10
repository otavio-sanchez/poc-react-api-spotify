
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const envDSV = require('./env/env.dsv.json');


const env = Object.keys(envDSV).map((key) => {

    return {
        [key]: JSON.stringify(envDSV[key])
    }

})

const DefinePlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('development'),
        ...Object.assign({}, ...env) 
    },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' })

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
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
    plugins: [DefinePlugin, HTMLWebpackPluginConfig]
};