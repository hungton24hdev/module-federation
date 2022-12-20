const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
module.exports = {
  modules: {
    localIdentName: "[name]_[hash:base64]",
  },
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          remoteApp: "remote@http://localhost:3001/remoteEntry.js",
        },
        exposes: {},
        shared: {
          ...deps,
        },
      }),
    ],
  },
};
