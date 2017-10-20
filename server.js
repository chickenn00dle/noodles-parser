const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {

  
  let ipAddress = req.headers['x-forwarded-for'],
      language = req.headers['accept-language'],
      ;
  
  
  
  res.send(null);
});

const listener = app.listen(port, (err, event) => {
  if (err) throw err;
  console.log('Listening on port ' + port);
});

// headers: 
//    { 'x-forwarded-host': 'noodles-parser.glitch.me',
//      'x-glitch-routing': '3ad9550c-ccc9-4616-829a-6405145dc005:1085',
//      'x-request-id': '9d30e5dfc43dacce',
//      connection: 'keep-alive',
//      'x-forwarded-for': '113.43.84.140,::ffff:10.10.10.121,::ffff:127.0.0.1,10.10.10.174,::ffff:172.17.0.1',
//      'x-forwarded-proto': 'https,http,http,http,http',
//      'x-forwarded-port': '443,80,80,80,80',
//      host: 'noodles-parser.glitch.me',
//      'x-amzn-trace-id': 'Root=1-59e9a96e-3b7ab9dc085dd75161c1d31a',
//      'upgrade-insecure-requests': '1',
//      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
//      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//      referer: 'https://glitch.com/edit/',
//      'accept-encoding': 'gzip, deflate, br',
//      'accept-language': 'en-US,en;q=0.8',
//      'if-none-match': 'W/"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"',
//      cookie: '_ga=GA1.2.1440408254.1501809237' },