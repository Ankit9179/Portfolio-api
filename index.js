const express = require("express");
const cors = require("cors");

const app = express();
const data = require("./JsonData");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`rerver is running on port ${PORT}`);
});
