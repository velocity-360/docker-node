var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
	res.json({
		confirmation: 'success',
		resource: 'home'
	})
})


module.exports = router