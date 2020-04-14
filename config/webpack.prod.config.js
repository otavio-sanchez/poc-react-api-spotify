const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const envPROD = require('./env/env.prod.json');

const env = Object.keys(envPROD).map((key) => {
    return {
        [key]: JSON.stringify(envPROD[key]),
    };
});

const DefinePlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
        ...Object.assign({}, ...env),
    },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[hash].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: '@svgr/webpack',
                    options: {
                        configFile: './config/svg.js'
                    }
                  }
                ]
              },
           
        ],
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    plugins: [DefinePlugin, HTMLWebpackPluginConfig],
};
