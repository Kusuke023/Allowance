var http = require("http");
<<<<<<< HEAD
var server = http.createServer((req, res) => {
  res.end("Hello World");
});
server.listen(3000);
=======
var server = http.createServer((request, response) => {
  response.end("Hello World");
});
server.listen(3000);

// var http = require("http");
// var server = http.createServer((req, res) => {
//   console.log(
//     `[${(new Date()).toISOString()}]` +
//     `${req.method} ${req.url}` +
//     `${req.headers["user-agent"]}`
//   );
//   res.end("Hello Wolld !");
// });
// server.listen(3000);

// var http = require("http");
// var data = "Hello World !";
// var url = "http://localhost:3000/";
// var options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Content-Length": Buffer.byteLength(data)
//   }
// };
// var req = http.request(url, options, (res) => {
//   res.pipe(process.stdout);
// });
// req.end(data);
>>>>>>> 125a3613f3ec47d7bc702c81c1676f24e1a1a020
