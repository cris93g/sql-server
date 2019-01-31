const { getProducts } = require("../controller/itemCtrl");
//route to get products
module.exports = app => {
	app.get("/api/products", getProducts);
};
