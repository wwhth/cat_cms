const Koa = require("koa");
const registerRouter = require("../routes/index");
// const readline = require('readline');
// const chalk = require('chalk');
// const CFonts = require('cfonts');
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());
registerRouter(app)

module.exports = app;
