const express = require("express");
const app = express();

app.get("/hello-cd", (req, res) => {
  const msg = "Hello World";
  const user = {
    name: "Edu",
    age: 30
  };
  return res.status(200).json({ user });
  res.end();
});

app.listen(5000);
