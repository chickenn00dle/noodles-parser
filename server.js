const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  let ipAddress = req.get('x-forwarded-for').replace(/^([0-9.]*),.*/, '$1'),
      language = req.get('accept-language').replace(/^([a-zA-Z-]*),.*/, '$1'),
      software = req.get('user-agent').replace(/^\S*\s\(([^\)]*)\).*/, '$1');

  console.log(software);
  
  //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36
  
  let json = {
    'ipaddress': ipAddress,
    'language': language,
    'software': software
  }

  res.send(json);
});

const listener = app.listen(port, (err, event) => {
  if (err) throw err;
  console.log('Listening on port ' + port);
});