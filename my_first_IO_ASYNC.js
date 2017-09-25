//Set filesystem as variable to store the full fs module.
var fs = require('fs');

//Since this is an asynchronous, we will use fs.readFile().
//A variable is not needed in this case.
fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var text = data.toString();
        var lines = text.split('\n');
        console.log(lines.length - 1);
    }
});

