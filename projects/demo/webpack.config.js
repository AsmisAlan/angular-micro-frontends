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
          
            // For remotes (please adjust)
            /*
            name: "demo",
            library: { type: "var", name: "demo" },
            filename: "remoteEntry.js",
            exposes: {
                './Component': './projects/demo/src/app/app.component.ts',
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
