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