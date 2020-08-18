const fs = require("fs-extra");
const path = require("path");
const { spawn } = require("child_process");

fs.copy(path.join(__dirname, "./fe/src"), "./src").catch((e) => {
  throw new Error(e);
});

fs.copy(
  path.join(__dirname, "./fe/webpack.config.js"),
  "./webpack.config.js"
).catch((e) => {
  throw new Error(e);
});

fs.copy(path.join(__dirname, "./fe/tsconfig.json"), "./tsconfig.json").catch(
  (e) => {
    throw new Error(e);
  }
);

const modules =  [
  "typescript",
  "react-dom",
  "react",
  "@types/react",
  "@types/react-dom",
  "jest",
  "ts-jest",
  "webpack",
  "webpack-cli",
  "webpack-dev-server",
  "ts-loader",
  "babel-loader",
  "html-webpack-plugin",
  "dotenv",
  "react-router-dom",
  "@babel/preset-env",
  "mini-css-extract-plugin",
  "@types/jest",
  "react-router-dom",
  "@types/react-router-dom",
]

var install = require('spawn-npm-install')
 
install(modules, { saveDev: false }, function(err) {
  if (err)
    console.error("Could not install:\n" + err.message)
  else
    console.log("Installed.")
})
