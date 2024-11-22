
// Create a Simple HTTP Server:
// Create a Node.js HTTP server that serves multiple
//routes (e.g., /, /about, /contact). Each route should return a different message or HTML content.
// Ensure that non-existent routes return a "404 Page Not Found" message.

const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Welcome to the Home page!</h1>");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("<h1>Welcome to the about page!</h1>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Welcome to the contact page!</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Page Not Found</h1>");
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});