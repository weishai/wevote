var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {

  //Entry points to the project
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js')
  ],

  //Config options on how to interpret requires imports
  resolve: {
    extensions: ["", ".js", ".jsx"]
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },

  //Server Configuration options
  devServer:{
    contentBase: 'src/www',  //Relative directory for base of server
    devtool: 'eval',
    hot: true,        //Live-reload
    inline: true,
    port: 3001        //Port Number
  },

  devtool: 'cheap-module-eval-source-map',

  //output config
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js'  //Name of output file
  },

  plugins: [
    //Enables Hot Modules Replacement
    // new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    //Moves files
    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname, "src"))
  ],

  module: {
    //Loaders to interpret non-vanilla javascript code as well as most other extensions including images and text.
    // preLoaders: [
    //   {
    //     //Eslint loader
    //     test: /\.(js|jsx)$/,
    //     loader: 'eslint-loader',
    //     include: [path.resolve(__dirname, "src/app")],
    //     exclude: [nodeModulesPath]
    //   },
    // ],
    loaders: [
      {
        //React-hot loader and
        test: /\.(js|jsx)$/,  //All .js and .jsx files
        loaders: ['react-hot', 'babel'],
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
}


module.exports = config;
