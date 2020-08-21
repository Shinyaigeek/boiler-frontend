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

const modules = [
  "react-dom",
  "react",
  "@types/react",
  "@types/react-dom",
  "ts-loader",
  "babel-loader",
  "html-webpack-plugin",
  "react-router-dom",
  "mini-css-extract-plugin",
  "react-router-dom",
  "@types/react-router-dom",
];

const modulesDev = [
  "typescript",
  "prettier",
  "eslint",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "@types/jest",
  "@babel/preset-env",
  "jest",
  "ts-jest",
  "webpack",
  "webpack-cli",
  "webpack-dev-server",
  "dotenv",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  "@typescript-eslint/parser",
  "@typescript-eslint/eslint-plugin"
];

const install = require("spawn-npm-install");

install(modules, { saveDev: false }, function (err) {
  if (err) console.error("Could not install:\n" + err.message);
  else {
    console.log("Modules are Installed.");
    install(modulesDev, { saveDev: true }, (err2) => {
      if (err2) console.error("cloud not install");
      else console.log("done");
    });
  }
});
