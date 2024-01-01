// const Koa = require("koa");
// // const readline = require('readline');
// // const chalk = require('chalk');
// // const CFonts = require('cfonts');
// const userRouter = require("./routes/user");

// const SERVER_PORT = require("./config/server").SERVER_PORT;

// const app = new Koa();
// app.use(userRouter.routes()).use(userRouter.allowedMethods());
const app = require("./app");

const SERVER_PORT = require("./config/server").SERVER_PORT;
require('./utils/handle-error');
const consolePng = require("console-png");
consolePng.attachTo(console);
app.listen(SERVER_PORT, () => {
  console.log(__dirname);
  console.png(require("fs").readFileSync(__dirname + "/assets/Cat1.png"));
  console.log(`server is running at port ${SERVER_PORT}`);
});
