var db = require('../mongodb');

list = (req, res, next) => {

	console.log('inside list', req.session.email);
	db.Todos.find({ "admin": req.session.email })
		.then((response) => {

			if (response) {
				res.json({ status: "Success list", result: response })
			}
			else {
				res.json({ status: "no list" })
			}
		}).catch(function (e) {
			console.log('erre')
		})

}

module.exports = {
	list
}