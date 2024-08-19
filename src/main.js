// const Koa = require("koa");
// // const readline = require('readline');
// // const chalk = require('chalk');
// // const CFonts = require('cfonts');
// const userRouter = require("./routes/user");
const path = require("node:path");
// const os = require("node:os");

// console.log(
//   "%c Line:9 🥑",
//   "color:#e41a6a",
//   os.platform(),
//   os.release(),
//   os.type(),
//   os.version(),
//   os.homedir(),
//   os.arch(),
//   os.cpus().length,
//   os.networkInterfaces()
// );
// const SERVER_PORT = require("./config/server").SERVER_PORT;

// const app = new Koa();
// app.use(userRouter.routes()).use(userRouter.allowedMethods());
const app = require("./app");

const SERVER_PORT = require("./config/server").SERVER_PORT;
require("./utils/handle-error");
const consolePng = require("console-png");

console.log("%c Line:17 🍇", "color:#ffdd4d", path.sep);
consolePng.attachTo(console);
app.listen(SERVER_PORT, () => {
  console.png(require("fs").readFileSync(__dirname + "/assets/Cat1.png"));
  console.log(`server is running at port http://localhost:${SERVER_PORT}/api/v1/login/test`);
});
