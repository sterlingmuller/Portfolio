const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/', express.static(__dirname + '/client/dist'));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/client/dist/index.html'))
// })

app.listen(port, (err) => {
  if (err) {
    console.log('could not reach port');
  } else {
    console.log (`Listening on port ${port}`);
  }
});