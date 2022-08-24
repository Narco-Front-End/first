const {join, resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin')

=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
>>>>>>> 0f8c06ea6cea05aa5da0c4caf5aa29cb5b6ee4fe

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, './build'),
    filename: '[name]-[fullhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

<<<<<<< HEAD
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[fullhash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/uikit.html'
        })
    ],
    devServer: {
        port: 3001,
        static: {
            directory: join(__dirname, 'src')
        }
    }
};
=======
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 3001,
    static: {
      directory: join(__dirname, 'src'),
    },
  },
};
>>>>>>> 0f8c06ea6cea05aa5da0c4caf5aa29cb5b6ee4fe
