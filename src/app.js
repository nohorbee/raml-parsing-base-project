var ramlParser = require('raml-parser');

ramlParser.loadFile("./examples/example.raml").then(function(data) {
  console.log(JSON.stringify(data, null, 2));
}) ;
