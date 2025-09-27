const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({});
let current = 0;

const leastConnections = (servers, req, res) => {
    servers.sort((a,b)=>a.connections-b.connections);
  const target = servers[0];   //first item will have least number of connections
  target.connection++;
  proxy.web(req, res, { target: `http://${target.host}:${target.port}` });
  console.log(
    `Routing to ${target.host}:${target.port} | Active connections: ${target.connections}`
  );

  res.on('finish',()=>{
    target.connections--;
  })
};

module.exports = leastConnections;
