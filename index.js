const fs = require("fs-extra");
const path = require("path");
const assert = require("assert");

const { install } = require("npm-yarn-runtime-installer")

const { program } = require("commander");

program.option("-b --boiler <type>", "fe");

program.parse(process.argv);

const { boiler } = program;

assert(boiler);

if (typeof boiler !== "string") {
  throw new Error("boiler must be string value");
}

const boilerPath = `./boilerPlates/${boiler}`;

const rawModules = fs.readFileSync(path.join(__dirname, `${boilerPath}/modules.json`), "utf-8")
const rawFiles = fs.readFileSync(path.join(__dirname, `${boilerPath}/files.json`), "utf-8")

const modules = JSON.parse(rawModules);
const files = JSON.parse(rawFiles)

const copyFile = (file) => {
  fs.copy(path.join(__dirname, `${boilerPath}/${file}`), `./${file}`).catch((e) => {
    throw new Error(e);
  });
}

files.files.forEach(file => {
  copyFile(file)
})

files.folders.forEach(folder => {
  copyFile(folder)
})

const numberOfModule = modules.modules.length + modules.modulesDev.length;

const proc = install(modules.modules, false, "yarn")

proc.on("exit", () => {
  const procDev = install(modules.modulesDev, true, "yarn");
  procDev.on("exit", () => {
    console.log("done")
  })
})
