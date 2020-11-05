const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:5000/",
        uniqueName: "demo"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
            remotes: {
                'shell': "shell@http://localhost:5200/remoteEntry.js"
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
      ],
    };
