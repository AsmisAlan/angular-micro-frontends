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
            name: "app",
            remotes: {
                'shell': "shell@http://localhost:5200/remoteEntry.js",
                'pizza-selector': "pizza-selector@http://localhost:5000/remoteEntry.js",
            },
            filename: "remoteEntry.js",
            exposes: {
                './ShellConfigurationModule': './projects/demo/src/app/shell-routing.module.ts'
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
    ],
};
