const express = require('express');
const port = process.argv.PORT;

const app = express();

app.get('/', (req, res) => {
  
});

const listener = app.listen(port, (err, data) => {
  console.log('Listening on port ' + port);
});