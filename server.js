const http = require("http")
const server = http.createServer((request, response) => {
  response.end("Hello, Galvanize!");
});
server.listen(PORT=3001, HOST="127.0.0.1", () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});