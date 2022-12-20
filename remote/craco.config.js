const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  modules: {
    localIdentName: "[name]_[hash:base64]",
  },
  devServer: {
    // liveReload: true,
    watchFiles: [path.resolve(__dirname, "..")], // make sure that hits your host app folder
  },
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "remote",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./router": "./src/router",
          "./appInjector": "./src/appInjector",
        },
        shared: {
          ...deps,
        },
      }),
    ],
  },
};
