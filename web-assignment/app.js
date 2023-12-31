const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const filePath = `./public${path}.html`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
