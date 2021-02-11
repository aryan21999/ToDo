var express = require('express');
var router = express.Router();

var auth = function (req, res, next) {
	if (req.session.email && req.session.isLogged) {
		return next();
		// req.session.destroy();
	}	
	else
		return res.json({ status: 'FAILED', message: 'Please login.' });
};

var authenticate = require('../api/authenticate')
var addUser = require('../api/addUser')
var logout = require('../api/logout')
var addTodo = require('../api/addTodo')
var listTodo = require('../api/listTodo')
var deleteTodo = require('../api/deleteTodo')
var checkTodo = require('../api/checkTodo')

router.post('/authenticate', authenticate.authenticate)
router.post('/adduser', addUser.addUser)
router.post('/logout',logout.logout)
router.post('/add',addTodo.add)
router.post('/list',auth, listTodo.list)
router.post('/delete', deleteTodo.del)
router.post('/check',checkTodo.check)


module.exports = router;
