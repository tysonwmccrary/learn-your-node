//Set filesystem as variable to store the full fs module.
var fs = require('fs');

//To read the filesystem end the statement with "sync".
//Store into variable data.
//This will produce a buffer/binary info.
var data = fs.readFileSync(process.argv[2]);

//Turn the buffer/binary into a string.
var text = data.toString();

//To count the lines make a variable called lines.
//Use .split() to place the data in an array.
var lines = text.split('\n');

console.log(lines.length - 1);
