
const path = require("path")
module.exports = {
    entry :  './index.js',
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "asset/[hash][ext]", //what is the folder of the assets
        clean : true

    },
    module : {
        rules : [
            {
                test : /.(avif|webp|jpg|jpeg|png)/, //types of the files
                type : "asset/resource"
            }
        ]
    }
}