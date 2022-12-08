var http = require('http');
var server = http.createServer(http);

server.listen(27017, () => {
  console.log('server listening to port 27017');
});
