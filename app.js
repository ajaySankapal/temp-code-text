const http = require("http");
//req: user request to the server
// res: giving response to the user
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our first history");
  }
  res.end(`
  <h1>oops!</h1>
  <p>sorry not found the page you are looking for</p>
  <a href='/' >back home</a>
  `);
});
server.listen(5000);
