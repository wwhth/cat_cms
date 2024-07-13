const connection = require("../app/database");

class CategoryService {
	async getCategoryById(id) {
		const result = await connection.query("SELECT * FROM blog_category WHERE id = ?", [id]).then((res) => {
			const [values] = res;
			return values;
		}).catch((err) => {
			throw err
		});
		return result;
	}
	async getSameCategory(name) {
		const result = await connection.query("SELECT * FROM blog_category WHERE category_name = ?", [name]).then((res) => {
			const [values] = res;
			return values;
		}).catch((err) => {

			throw err
		})
		return result
	}
	async getAll() {
		const categoryList = await connection.query("SELECT bc.id,bc.category_name as name FROM blog_category bc").then((res) => {
			const [values] = res;
			return values;

		}).catch((err) => {
			console.log("🚀 ~ LabelService ~ category ~ err:", err)
		});;
		return categoryList;
	}
	async createCategory(name) {
		const result = await connection.query("INSERT INTO blog_category (category_name) VALUES (?)", [name]).then(_ => {
			return {
				code: 200,
				message: "创建成功",
			}
		}).catch(err => {
			console.log("🚀 ~ categoryService ~ result ~ err:", err)
			return {
				code: 500,
				message: "创建失败",
			}
		});
		return result
	}
	async updateCategory(id, name) {

		const result = await connection.query("UPDATE blog_category SET category_name = ? WHERE id = ?", [name, id]).then(_ => {
			return {
				code: 200,
				message: "更新成功",
			}
		}).catch(err => {
			return {
				code: 500,
				message: "更新失败"
			}
		});
		return result
	}
	async deleteCategory(id) {

		const result = await connection.query("DELETE FROM blog_category WHERE id = ?", [id]).then(res => {
			const [field, values] = res
			return {
				code: 200,
				message: "删除成功",
			}
		}).catch(err => {
			return {
				code: 500,
				message: "删除失败",
			}
		});
		return result
	}
}


module.exports = new CategoryService();
