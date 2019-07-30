const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const miniCssExtractConfig = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});

const copyWebpackPlugin = new CopyWebpackPlugin([
  {
    context: './server/images',
    from: '**/*',
    to: './images',
  },
]);

const babelPluginRootImport = () => [
  'babel-plugin-root-import',
  {
    paths: [
      {
        rootPathPrefix: '@/',
        rootPathSuffix: './src/modules',
      },
      {
        rootPathPrefix: '#/',
        rootPathSuffix: './src/components',
      },
    ],
  },
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['> 0%'],
                }),
              ],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['> 0%'],
                }),
              ],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
  },
  plugins: [
    babelPluginRootImport,
    htmlWebpackPluginConfig,
    copyWebpackPlugin,
    miniCssExtractConfig,
    autoprefixer,
  ],
  devServer: {
    contentBase: './dist',
    open: 'chrome',
  },
};
