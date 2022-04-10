const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const assets = ["images"];

const copyAssets = assets.map((asset) => {
  return new CopyWebpackPlugin({
    patterns: [{ from: path.resolve(__dirname, "src", asset), to: asset }],
  });
});

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.(png|jpg|svg|jpeg|gif)$/i,
  use: [{ loader: "file-loader" }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: [...plugins, ...copyAssets],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/reducers": path.resolve(__dirname, "./src/reducers"),
      "@/types": path.resolve(__dirname, "./src/types"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
