const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({});
let current = 0;

const roundRobin = (servers, req, res) => {
  const target = servers[current];
  console.log("Forwarding to:", target);
  current = (current + 1) % servers.length;
  proxy.web(req, res, { target: `http://${target.host}:${target.port}` });
};

module.exports = roundRobin;
