const app = require('../app/index')

app.on('error', (error, ctx) => {
	//错误处理
	console.log(error, '------');
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
			ctx.body = error
			break;
	}
})