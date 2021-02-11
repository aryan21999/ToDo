logout = (req, res, next) => {
    	req.session.isLogged = false,
		req.session.destroy();
		res.json({ status: "user logged out" ,isLogged : false})
}

module.exports = {
	logout
}