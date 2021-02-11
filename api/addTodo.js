var db = require('../mongodb');

add = (req, res, next) => {
	// console.log('tokenn', req.session.email);
	todoRes = {
        text: req.body.text,
        completed: req.body.completed
	}

	console.log(req.session.email);
	db.Todos.findOne({ admin: req.session.email, text: todoRes.text })
		.then(function (response) {
			if (!response) {
				var todo = new db.Todos({
					"admin": req.session.email,
                    "text": todoRes.text,
                    "completed": false
				});
				todo.save()
					.then(function (response) {
						res.send({ 'status': 'added successfully' })
					})
					.catch(function (e) {
						res.send({ 'status': 'failure', Error: e });
					});
			}
			else {
				res.send({ 'status': 'todo already exist' });
				status:'todo already exist';
			}
		})
		.catch(function (e) {
			res.send({ 'status': e })
		})
};

module.exports = {
	add
}