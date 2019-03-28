var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
 filename: 'main.css',
 publicPath: '/dist'
});

module.exports = {
 entry: './src/js/index.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
 },
 module: {
  rules: [
   {
    test : /\.js$/,
    use : [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    ]
},
   {
    test: /\.scss$/,
    use: extractPlugin.extract({
     use: ['css-loader', 'sass-loader']
    })
   }
  ]
 },
 plugins: [
  extractPlugin
 ]
};