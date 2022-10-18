const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  console.log("Yeni bir istek geldi");
  next();
};
const postMiddleware = function (req, res, next) {
  console.log("Post istegi için isted gonderildi");
  next();
};

//app.use(middleware);

app.get("/hello", middleware, (req, res) => {
  console.log("merhaba get istegi attınız");
  res.json("hello get rest api");
});

app.post("/hello", middleware, postMiddleware, (req, res) => {
  console.log("merhaba post istegi attınız");
  res.json("hello post rest api");
});

app.put("/hello", middleware, (req, res) => {
  console.log("Merhaba put istegi attınız");
  res.json("hello put rest api");
});

app.delete("/hello", middleware, (req, res) => {
  console.log("Merhaba delete istegi attınız");
  res.json("hello delete rest api");
});

app.listen(PORT, () => {
  console.log("Listening:", PORT);
});
