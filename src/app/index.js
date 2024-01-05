const Koa = require("koa");
// const readline = require('readline');
// const chalk = require('chalk');
// const CFonts = require('cfonts');
const userRouter = require("../routes/user");
const loginRoute = require("../routes/login");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(loginRoute.routes()).use(loginRoute.allowedMethods());

module.exports = app;
