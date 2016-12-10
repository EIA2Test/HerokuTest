"use strict";
// Import HTTP module from node.js
const http = require("http");
const url = require("url");
// Get or define port to listen on
var port = process.env.PORT;
if (port == undefined)
    port = 8080;
var counter = 0;
// Create a server that calls handleRequest when requested 
var server = http.createServer(handleRequest);
// start and listen
server.listen(port, onListening);
// Handles request and send response
function handleRequest(request, response) {
    console.log("METHOD: " + request.method);
    if (request.method == "OPTIONS") {
        console.log("PREFLIGHT");
        response.writeHead(200, { "Access-Control-Request-Method": "*" });
        response.end();
        return;
    }
    response.writeHead(200, {
        "content-type": "text/html"
    });
    response.write("Heroku/Github/Mongo-Test<br>");
    response.write("appearantly needs procfile, though package.json may be omitted when required packages are installed<br>");
    response.write("created this text on new branch TestBranch<br>");
    response.write("NODE_ENV: " + process.env.NODE_ENV + "<br>");
    response.write("Calls to this page: " + ++counter + "<br>");
    response.write("Port: " + port + "<br>");
    response.write("Method: " + request.method + "<br>");
    response.write("Url: " + request.url + "<br>");
    response.write("Headers: " + request.headers + "<br>");
    // extract query-parameters
    var query = url.parse(request.url, true).query;
    console.log(query);
    for (var key in query)
        response.write(key + ": " + query[key] + "<br>");
    response.end();
}
function onListening() {
    console.log("Yup...Server listening on: http://localhost:%s", port);
}
//# sourceMappingURL=test.js.map