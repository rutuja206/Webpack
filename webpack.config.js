
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
            },
            {
                test : /\.(css)$/,
                use : ["style-loader","css-loader"] //loader are executed from right to left
            },
            {
                test : /\.(scss)$/,
                use : ["style-loader","css-loader","sass-loader"] //first sass convert your scss into css and then css is style will ingest it into head of youe dom
                
            },
        ]
    }
}