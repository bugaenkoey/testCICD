/*
console.log(process.env.USER_ID); // "239482"
console.log(process.env.USER_KEY); // "foobar"
console.log(process.env.PORT); // "3000"

const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = process.env.PORT | 3000;

console.log("this Test CI/CD");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World\nServer running at http://${hostname}:${port}/`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

//++++++++++++++++

const express = require("express");
const app = express();
// app.listen(3000);
app.get("/", function (request, response) {
  response.send("Hello Test");
});

// module.exports = { app };
module.exports.app = app;
