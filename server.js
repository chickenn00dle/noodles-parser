const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  let ipAddress = req.get('x-forwarded-for'),
      language = req.get('accept-language'),
      software = req.get('user-agent');
  
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