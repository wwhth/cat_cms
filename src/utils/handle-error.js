const app = require("../app/index");

app.on("error", (error, ctx, status = 500) => {
  console.log("%c Line:4 🥤 status", "color:#b03734", status);
  console.log("%c Line:4 🍓 ctx", "color:#42b983", error);
  ctx.status = status;
  //错误处理
  console.log(error, "------");
  switch (error.status) {
    // case 404:
    // 	ctx.body = error;
    // 	break;
    // case -1001:
    // 	ctx.body = error;
    // 	break;
    // case -1002:
    // 	ctx.body = error;
    // 	break;
    default:
      ctx.body = error;
      break;
  }
});
