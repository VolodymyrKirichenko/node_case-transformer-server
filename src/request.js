const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5700,
  path: '/createServer?toCase=SNAKE',
};

http.get(options, (res) => {
  res.setEncoding('utf-8');
  res.on('data', console.log);
});
