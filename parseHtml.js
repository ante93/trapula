var DomParser = require('dom-parser');
var http = require("http");
var fs = require("fs");
var parser = new DomParser();
var document;
var html;

  fs.readFile('./index.txt', function(err, data) {
    html = String(data);	
    document = parser.parseFromString(html);
    myFunction(document);
    
  });
;

function myFunction(document) {
var i = 1;
var klasa = "EntityList-item EntityList-item--Regular EntityList-item--n1  bp-radix__faux-anchor  ";
while(i<10){
	var link = document.getElementsByClassName(klasa)[0].getAttribute('data-href');
	var time = document.getElementsByClassName(klasa)[0].getElementsByClassName('date date--full')[0].getAttribute("datetime");
 	console.log("--->stan:"+ String(i));
 	console.log("time ---> " + Date.parse(time));
 	console.log("link ---> njuskalo.hr" + link);    
	i++;
 	var klasa = "EntityList-item EntityList-item--Regular EntityList-item--n"+String(i)+"  bp-radix__faux-anchor  ";
 	try {
 	   if(!document.getElementsByClassName(klasa)[0]) throw err;
	}
	catch(err) {
    break;
		}
	 }
 console.log("DONE");
 var sysDate = new Date();
 console.log(Date.parse(sysDate));
 var razlika = Date.parse(sysDate)-Date.parse(time);
 console.log(razlika/3600000);
    }
    // myFunction(document);

