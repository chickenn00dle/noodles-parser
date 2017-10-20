const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  console.log(process.env);
  let ipAdd = pr
});

const listener = app.listen(port, (err, event) => {
  if (err) throw err;
  console.log('Listening on port ' + port);
});

// const listener = app.listen(process.env.PORT, (err, res) => {
//   if (err) throw err;
//   console.log('Your app is listening on port ' + listener.address().port);
// });