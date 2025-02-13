const Koa = require("koa");
const registerRouter = require("../routes/index");
// const readline = require('readline');
// const chalk = require('chalk');
// const CFonts = require('cfonts');
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const app = new Koa();
app.use(
  cors({
    origin: "*",
    // origin: function (ctx) {
    //   //设置允许来自指定域名请求
    //   if (ctx.url === "/test") {
    //     return "*"; // 允许来自所有域名请求
    //   }
    //   return "*"; //只允许http://localhost:5173这个域名的请求
    //   // return "http://localhost:5173"; //只允许http://localhost:5173这个域名的请求
    // },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
    allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"] //设置获取其他自定义字段
  })
);
app.use(bodyParser());
registerRouter(app);

module.exports = app;
