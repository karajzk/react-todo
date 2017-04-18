const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map",
    devtoolModuleFilenameTemplate: function(info) {
      return "file:///" + info.absoluteResourcePath;
    }
  },
  resolve: {
    modules: [
      "node_modules", "./app/components", "./app/api"
    ],
    alias: {
      applicationStyles: path.resolve(__dirname, "app/styles/app.scss"),
      actions: path.resolve(__dirname, "app/actions/actions.jsx")
    },
    extensions: [".js", ".jsx"]
  },

  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [path.resolve(__dirname, "node_modules/foundation-sites/scss")]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    hot: true,
    inline: true
  },
  devtool: "cheap-module-eval-source-map"
};
