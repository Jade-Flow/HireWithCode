const express = require("express");
const app = express();
const copywritingRouter = require("./routers/getCopywriting");
const accpteChallenge = require("./routers/acceptChalllenge");
const finishedRouter = require("./routers/finished");
const fs = require("fs");
const path = require("path");
app.all("*", function (req, res, next) {
  // 设置请求头为允许跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 设置服务器支持的所有头信息字段
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, sessionToken"
  );
  // 设置服务器支持的所有跨域请求的方法
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method.toLowerCase() == "options") {
    res.sendStatus(200); // 让options尝试请求快速结束
  } else {
    next();
  }
});

app.use("/copywriting", copywritingRouter);
app.use("/acceptChallenge", accpteChallenge);
app.use("/finished", finishedRouter);
// express配置跨域
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.use(express.static(path.resolve(__dirname, "../static")));
app.listen(3300);
