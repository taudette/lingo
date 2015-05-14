var Word = require('../models/words.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res){
		res.render('translate');
	},

	addWord: function(req, res){
		var wordData = req.query.word;
		console.log('adding');
		var newWord = new Word(wordData);
		
		newMonster.save(function(err, results){
			console.log(results);
			res.send(results);
		});
	},

	getWords: function(req, res){
		Word.find({}, function(err, results){
			res.send(results);
		});
	}
};

module.exports = indexController;