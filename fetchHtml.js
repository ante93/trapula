var request = require("request");
var fs = require("fs");
request({
  uri: "http://www.njuskalo.hr/iznajmljivanje-stanova?locationId=1578&price%5Bmax%5D=600&roomCountId=190",
}, function(error, response, body) {
	fs.writeFile('index.txt', body, function (err) {
	if (err) throw err;
	console.log('Written to file!');
});
});
