const express = require("express");
const app = express();
const { database } = require("./database");
const port = 3000;

app.use(express.static(__dirname + "/Views"));

app.get("*", function (req, res) {
  res.sendFile(__dirname + "Views/index.html");
});

// start the server listening for requests
app.listen(port, () => console.log(`Server is running on port ${port}.`));

database();
