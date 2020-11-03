const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:5200/",
        uniqueName: "shell"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({

            // For remotes (please adjust)
            /*
            name: "shell",
            library: { type: "var", name: "shell" },
            filename: "remoteEntry.js",
            exposes: {
                './Component': './projects/shell/src/app/app.component.ts',
            },
            */

            // For hosts (please adjust)
            /*
            remotes: {
                'mfe1': "mfe1@http://localhost:3000/remoteEntry.js"
            },
            */

            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
      ],
    };
