const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  let ipAddress = req.get('x-forwarded-for').replace(/^(.*),.*/, '$1'),
      language = req.get('accept-language'),
      software = req.get('user-agent');
  
  console.log(ipAddress);
  
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