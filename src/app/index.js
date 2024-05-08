const Koa = require("koa");
const registerRouter = require("../routes/index");
// const readline = require('readline');
// const chalk = require('chalk');
// const CFonts = require('cfonts');
const bodyParser = require("koa-bodyparser");
const cors = require('koa-cors');   // 解决跨域

const app = new Koa();
app.use(cors());
app.use(bodyParser());
registerRouter(app)

module.exports = app;
