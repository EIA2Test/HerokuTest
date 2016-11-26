// Import HTTP module from node
import http = require("http");
// Get or define port to listen on
var port: number = process.env.PORT;
if (port == undefined)
    port = 8080;

var counter: number = 0;

// Create a server that calls handleRequest when requested 
var server: http.Server = http.createServer(handleRequest);
// start and listen
server.listen(port, onListening);

// Handles request and send response
function handleRequest(request: http.ServerRequest, response: http.ServerResponse): void {
    response.writeHead(200, {
        "content-type": "text/html"
    });
    response.write("Hello World<br>");
    response.write("Process: " + process + "<br>");
    response.end("Klappt! Request url: " + request.url);
}

function onListening(): void {
    console.log("Yup...Server listening on: http://localhost:%s", port);
}