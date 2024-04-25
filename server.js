let express = require("express");
let app = express();
let fs = require("fs");

app.get("/getUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

let server = app.listen(8080, function () {
  let port = server.address().port;
  console.log("REST API demo app listening at http://localhost:%s", port);
});
