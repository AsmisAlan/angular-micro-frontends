const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:5100/",
        uniqueName: "pizza-selector"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
          
            // For remotes (please adjust)
            /*
            name: "pizza-selector",
            library: { type: "var", name: "pizza-selector" },
            filename: "remoteEntry.js",
            exposes: {
                './Component': './projects/pizza-selector/src/app/app.component.ts',
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
