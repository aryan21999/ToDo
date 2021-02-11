var db = require('../mongodb');

check = (req, res, next) => {
	// console.log('tokenn', req.session.email);
	todoRes = {
        completed: req.body.completed,
        

    }
    var text=req.body.text;
    db.Todos.findOneAndUpdate({admin:req.session.email,text:text},todoRes)
    .then(function (response) {
	if (response) {
				res.json({ msg: "Todo is updated" });
			}
			else {
				res.json({ msg: "updation failed" });
			}
		})

}

module.exports = {
	check
}