const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/Views/index.html"));

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// start the server listening for requests
app.listen(process.env.PORT || port, () => console.log("Server is running..."));
