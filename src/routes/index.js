const fs = require('node:fs')
const path = require('node:path')

const files = fs.readdirSync(path.resolve(__dirname, '../routes'))

console.log(files, '-----')
files.map(item => {
	const router = require(`../routes/${item}`)
})

function registerRouter(app) {
	// 循环遍历files数组，将每个路由模块的router属性添加到router数组中
	files.forEach(item => {
		try {
			if (item !== "index.js") {
				const router = require(path.resolve(__dirname, `../routes/${item}`));
				app.use(router.routes()).use(router.allowedMethods());
				console.log(`${item} 加载成功`);
			}

		} catch (error) {
			ctxonsole.log(`${item} 加载失败`);

		}
	});
}

module.exports = registerRouter