const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.use('/', express.static(__dirname + '/client/dist'));

app.listen(port, (err) => {
  if (err) {
    console.log('could not reach port');
  } else {
    console.log (`Listening on port ${port}`);
  }
});