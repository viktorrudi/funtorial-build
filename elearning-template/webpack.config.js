const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const miniCssExtract = new MiniCssExtractPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            },
            {
                test: /\.scss$/,
                //use: ['css-loader', 'sass-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader?url=false'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    //require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]

            },
            {
                test: /\.html/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        miniCssExtract,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Nette: 'nette-forms',
            'window.Nette': 'nette-forms'
        })
    ]
}