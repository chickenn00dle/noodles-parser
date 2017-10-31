const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  let ipAddress = req.get('x-forwarded-for').replace(/^([0-9.]*),.*/, '$1'),
      language = req.get('accept-language').replace(/^([a-zA-Z-]*),.*/, '$1'),
      software = req.get('user-agent').replace(/^\S*\s\(([^\)]*)\).*/, '$1');

  console.log(software);
  
  let json = {
    'ipaddress': ipAddress,
    'language': language,
    'software': software
  }

  res.end(JSON.stringify(json, null, 3));
});

const listener = app.listen(port, (err, event) => {
  if (err) throw err;
  console.log('Listening on port ' + port);
});