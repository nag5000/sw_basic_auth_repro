const path = require('path');
const express = require('express')
const basicAuth = require('express-basic-auth')

const app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

let nextUsername = 0;

app.get(
  '/time',

  basicAuth({
    authorizer: (username, password) => (username == nextUsername),
    challenge: true,
  }),

  async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.send(new Date().toISOString());

    nextUsername++;
  }
);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started at http://localhost:' + port);
