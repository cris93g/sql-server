module.exports = {
	//creates function where we use sql file in db folder to get products
	getProducts(req, res) {
		const db = req.app.get("db");
		db.getProducts()
			.then(products => res.status(200).json(products))
			.catch(console.log);
	}
};
