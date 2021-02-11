var db = require('../mongodb');

authenticate = (req, res, next) => {

	db.Accounts.findOne({
		email: req.body.email, password: req.body.password
	}, function (err, user) {

		if (err) throw err;

		if (!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {

			// check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			}