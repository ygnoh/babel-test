const babel = require("@babel/core");
const fs = require("fs");
const filename = "./basis.js";
const source = fs.readFileSync(filename, "utf8");
const {ast} = babel.transformSync(source, {
    filename,
    ast: true,
    code: false
});

fs.writeFileSync("./ast.js", JSON.stringify(ast));

const {code: transpiled} = babel.transformFromAstSync(ast, source, {
    filename,
    plugins: ["@babel/plugin-transform-arrow-functions"],
    configFile: false
});

fs.writeFileSync("./transpiled.js", transpiled);
