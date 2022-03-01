const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log("Request method:::", req.method);
  console.log("Request body:::", req.body);
  next();
})

app.use('/', express.static(__dirname + '/dist'));

app.listen(port, (err) => {
  if (err) {
    console.log('could not reach port');
  } else {
    console.log (`Listening on port ${port}`);
  }
});