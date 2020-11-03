# ModuleFederation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Steps to create micro frontend

1. Install the version of angular that supports webpack 5: 

Angular 11 will support webpack 

1. Create a clean workspace using this command:

`ng new module-federation --createApplication=false`

1. Set yarn as your package manager

`ng config -g cli.packageManager yarn`

Why?

1. Add the webpack resolution version in the `package.json` file.

``` json
  "resolutions": {
    "webpack": "5.0.0"
  },
```
