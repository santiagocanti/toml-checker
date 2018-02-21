var toml = require('toml');
var fs = require('fs');

var file = process.argv.length > 1 ? process.argv[2] : undefined;
var rawData = fs.readFileSync(file);

// Should throw exception if the data is bad
toml.parse(rawData.toString());
console.log("Valid TOML file");