<<<<<<< HEAD
function writeHeader(rootDir) {
  $.ajax({
    url: rootDir + "header.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準
    cache: false, //キャッシュを利用するか（お好みで）
    async: false, //非同期で読み込むか（お好みで）
    success: function (html) {
      html = html.replace(/\{\$root\}/g, rootDir);
      document.write(html);
    },
  });
}
=======
// const express = require("express");
// const app = express();

// // app.get("/", (req, res) => {
// //   res.status(200).send("Hwllo World.");
// // });
// app.use("/user", require("user.js"));

// app.listen(3000);

// var express = require("express");
// var app = express();

// app.get("/user", require("user.js"));

// app.listen(3000);

// var router = require("express").Router();

// router.use((req, res, next) => {
//   console.log((new DataCue()).toISOString());
//   next();
// });

// router.get("/", (req, res) => {
//   res.send("/");
// });

// router.get("/about", (req, res) => {
//   res.send("/about");
// });

// module.exports = router;

var express = require("express");
var app = express();

// app.get("/user/:id", (req, res) => {
//     console.log(req.params.id);
//   res.status(200).send("OK");
// });

app.use("/user", require("./user.js"));

app.listen(3000);
>>>>>>> 125a3613f3ec47d7bc702c81c1676f24e1a1a020
