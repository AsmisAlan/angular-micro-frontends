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
            name: "pizza-selector",
            filename: "remoteEntry.js",
            exposes: {
                './PizzaModule': './projects/pizza-selector/src/app/pizza-selector/pizza-selector.module.ts'
            },

            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
    ],
};
