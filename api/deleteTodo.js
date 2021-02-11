var db = require('../mongodb');

del = (req, res, next) => {
    text = req.body.text;
    console.log(req.session.email)
    console.log(text)
	db.Todos.findOneAndRemove({ admin: req.session.email, text: text }).then(function () {
		res.json({ status: "Todo deleted" })
	})
}

module.exports = {
	del
}