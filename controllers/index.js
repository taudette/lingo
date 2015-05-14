var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res){
		res.render('translate');

		// use req.query.word
	}
};

module.exports = indexController;