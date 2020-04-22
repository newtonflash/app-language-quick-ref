var config = require('./config.js');
var ncp = require('ncp').ncp;
var generateHTML = require('./ejs-static-site-exporter.js');

const copyStaticFiles = () => {
    ncp.limit = 16;

    ncp(config.staticFilesPath, config.localBuildPath, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Static file exported!');
    });
};

const build = () => {
    copyStaticFiles();
    generateHTML();
};

module.exports = build();