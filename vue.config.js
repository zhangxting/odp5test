const fs = require("fs"),
    path = require("path"),
    entriesDirPath = "./src/entries";
const setPages = directoryPath => {
    console.log(entriesDirPath);
    let items = fs.readdirSync(directoryPath);
    if (items.length) {
        items.forEach(item => {
            let itemPath = path.join(directoryPath, item),
                stat = fs.statSync(itemPath);
            if (exculed.indexOf(itemPath) > -1) {
                return;
            }
            if (stat.isDirectory()) {
                setPages(itemPath);
            } else if (stat.isFile() && /\.js$/.test(item)) {
                let relativePath = path.relative(entriesDirPath, itemPath),
                    key = relativePath.replace(".js", "").replace(/\//g, "-");

                pages[key] = {
                    entry: itemPath,
                    filename: relativePath.replace(".js", ".html")
                };
            }
        });
    }
};
let pages = {},
    exculed = process.env.VUE_APP_EXCLUED_ENTRIES;

exculed = exculed ? exculed.split(",") : [];

exculed = exculed.map(item => {
    return path.join(entriesDirPath, item);
});

setPages(entriesDirPath);

module.exports = {
    pages
};
