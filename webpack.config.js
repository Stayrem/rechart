const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC = path.join(__dirname, "src");
const PUBLIC = path.join(__dirname, "public");
module.exports = {
  mode: 'development',
  context: SRC,
  entry: {
    bundle: path.join(__dirname, "/src/index.js"),
  }, // webpack entry point. Module to start building dependency graph
  output: {
    path: path.join(__dirname, '/public'), // Folder to store generated bundle
    filename: '[name].js', // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: { // where we defined file patterns and their loaders
    rules: [{
        test: /\.(js|jsx)$/i,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
        }, ],
      },
    ]
  },
  plugins: [ // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      //filename: `index.html`,
      template: path.join(__dirname, "/src/index.html"),
    }),
    new CopyWebpackPlugin([{
        flatten: true,
        context: SRC,
        from: '**/*.{jp?(e)g,png,svg,gif,webp}',
        to: path.join(PUBLIC, 'img')
      },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: { // configuration for webpack-dev-server
    port: 7700, // port to run dev-server
    writeToDisk: true,

  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        }
      }
    }
  }
};