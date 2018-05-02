const express = require('express');
const app     = express();
const fs      = require("fs");
const store   = require("./db");

app.get('/user/current', (req, res) => {
  if (req.cookie.user) {
    res.json(req.cookie.user);
  } else {
    throw "Error! not logged in!"
  }
});

app.post('/user/login', async (req, res) => {
  let user = store.load(req.query.user, req.query.password);
  if (user) {
    if (~(JSON.parse(fs.readFileSync("./admins.txt")).indexOf(req.query.user))) {
      res.cookie("user", JSON.stringify(user));
    }
    return res.json(user);
  }
  res.status(404).send("error");
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));