const http = require("http");

//create server
const server = http.createServer((req, resp) => {
  //set response header
  resp.writeHead(200, { "content-type": "text/plan" });

  // Handle routes
  if (req.url === "/") {
    return resp.end("welcome to Home Page");
  } else if (req.url === "/about") {
    return resp.end("About page");
  } else {
    return resp.end("Page not Found");
  }
});

// Start server
const PORT = 3300;
server.listen(PORT, () => {
  console.log(`Server running of http://localhost:${PORT}`);
});
