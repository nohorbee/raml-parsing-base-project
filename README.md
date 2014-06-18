# RAML Parsing Base Project
## About
A minimal NodeJS example and base application using the [RAML JScript Parser](https://github.com/raml-org/raml-js-parser).

Use this application if you are intending to start a NodeJS RAML project that requires parsing capabilities.

Also use this application if you are trying to figure out how to use the parser.
## Hands On

1. Clone this repo (if interested on keeping your copy up-to-date or planning contributing to it) or download the code and create your own repo (if you are interested in using this code as base for your own project).
2. `npm install` on the project root folder.
3. `cd src`
4. `node app.js`

The output you see, is the result of parsing  `src/example/example.raml`

## Motivation
I noticed that many developers have doubts at the moment of starting a project. Shall this project work as a starting point to avoid the white-paper syndrom.

## Some explanation

- `src/app.js`:
  ```
  var ramlParser = require('raml-parser');
  ramlParser.loadFile("./examples/example.raml").then(function(data) {
    console.log(data);
  }) ;
  ```
  After getting an instance of the "raml-parser" module, `loadFile(path)` parses the file specified by "path" and invokes the anonymous function passing the parsing result to the "data" parameter.
- `src/examples/example.raml`: Sample RAML file. You might want to change this file, although, most probably, RAML file will be specified by your application's client.

## Doesn't covered

It's still pending to add some **sample tests** for the base application.
