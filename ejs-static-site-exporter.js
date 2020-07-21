var fs = require('fs'),
    ejs = require("ejs");

function ejs2html(sourceFilePath, destinationDirectory, contextConfig) {
    const fileName = sourceFilePath.split("/").pop().replace("ejs", 'html');
    const destinationFilePath = destinationDirectory + fileName;

    fs.readFile(sourceFilePath, 'utf8', function (err, data) {
        if (err) { console.log(err); return false; }
        var ejs_string = data,
            template = ejs.compile(ejs_string, { filename: sourceFilePath }),
            html = template(config);
        fs.writeFile(destinationFilePath, html, function(err) {
            if(err) { console.log(err); return false }
            return true;
        });
    });
}



const generateHTML = (srcPath , destPath) => {
    ejs2html(__dirname + "/pages/index.ejs", './build/');
};


module.exports = generateHTML;