//Lets require/import the HTTP module
var http = require('http');
//Lets define a port we want to listen to
var port = process.env.PORT;
if (port == undefined)
	port = 8080;

//Create a server
var server = http.createServer(handleRequest);
//Lets start our server
server.listen(port, onListening);

//We need a function which handles requests and send response
function handleRequest(request, response) {
	response.writeHead(200, {
		"content-type" : "text/html"
	});
	response.write("Hello World<br>");
	response.write("Process: " + process + "<br>");
	response.end('Klappt! Request url: ' + request.url);
}

function onListening() {
	console.log("Yup...Server listening on: http://localhost:%s", port);
}