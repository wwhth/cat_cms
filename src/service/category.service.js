const connection = require("../app/database");

class categoryService {
	async getAll() {
		const categoryList = await connection.query("SELECT bc.id,bc.category_name as name FROM blog_category bc").then((res) => {
			const [values] = res;
			return values;

		}).catch((err) => {
			console.log("🚀 ~ LabelService ~ category ~ err:", err)
		});;
		return categoryList;
	}
}


module.exports = new categoryService();
