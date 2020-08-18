const fs = require("fs-extra");
const path = require("path");

fs.copyFile(path.join(__dirname, "./fe"), "./");
