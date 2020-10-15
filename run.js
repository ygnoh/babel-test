const babel = require("@babel/core");
const fs = require("fs");
const filename = "./index.js";
const source = fs.readFileSync(filename, "utf8");
const {ast} = babel.transformSync(source, {
    filename,
    ast: true,
    code: false
});

fs.writeFileSync("./bundle.js", JSON.stringify(ast));
