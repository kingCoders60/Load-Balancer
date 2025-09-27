const http = require("http");
const serverConfig = require("./config.json");

const createServer = (host, port) => {
  http
    .createServer((req, res,timeout) => {
      setTimeout(() => {
        res.writeHead(200);
        res.end(`Server response from port: ${port}`);
      }, timeout);
    })
    .listen(port, host, () => {
      console.log(`Server running at http://${host}:${port}`);
    });
};

serverConfig.servers.forEach(server => {
    createServer(server.host,server.port,server.timeout);
});

module.exports = createServer;
