var port = Number(process.env.PORT || 3000);
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);

console.log('server listening on port: '+port);