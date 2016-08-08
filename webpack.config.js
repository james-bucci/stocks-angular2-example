var path = require("path");

module.exports = {
  entry: "./app.ts",
  output: {
      path: "./public",
      filename: "app.min.js"
  },
  resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ['', '.js', '.ts']
  },
  module: {
      loaders: [
          {
            test: /\.ts$/,
            loader: "ts-loader"
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          {
            test: /\.css$/,
            loaders: ["style", "css"]
          },
          {
            test: /\.html$/,
            loader: "file?name=[path][name].[ext]",
            include: [
              path.resolve(__dirname, "components")
             ]
          },
          {
              test: /\app.html$/,
              loader: "file?name=index.[ext]"
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: "file"
          }
      ]
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};
