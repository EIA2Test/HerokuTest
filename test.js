"use strict";
// Import HTTP module from node.js
var http = require("http");
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
    response.writeHead(200, {
        "content-type": "text/html"
    });
    response.write("Calls to this page: " + ++counter + "<br>");
    response.write("Port: " + port + "<br>");
    response.end("Request url: " + request.url);
}
function onListening() {
    console.log("Yup...Server listening on: http://localhost:%s", port);
}
//# sourceMappingURL=test.js.map