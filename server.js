const express = require("express");
const app = express();
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get("/hello-cd", (req, res) => {
  const msg = "Hello World";
  const user = {
    name: "Edu",
    age: 30
  };
  return res.status(200).json({ user });
  res.end();
});

app.listen(port);
