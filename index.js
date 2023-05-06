const express = require("express");
const app = express();
const data = require("./JsonData");

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`rerver is running on port ${PORT}`);
});
