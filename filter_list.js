//Since we are dealing with file systems.
var fs = require('fs');

//Since we are dealing with paths.
var path = require('path');

//We would like to find the direct patch of these files.
fs.readdir(process.argv[2], function(err, fileList) {
    if (err) {
        console.log(err);
    } else {
        for (var i = 0; i < fileList.length; i++) {
            var currentFileExtension = path.extname(fileList[i]);
            var suppliedExtension = '.' + process.argv[3];
            if (currentFileExtension === suppliedExtension) {
                console.log(fileList[i]);
            }
        }
    }
}); 