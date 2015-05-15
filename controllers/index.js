var Word = require('../models/words.js');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'snoTTjI7Sj73jdfTiahHCw%3D%3D'
});

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	viewTranslate: function(req, res){
		res.render('Viewtranslate');
	},


	translate: function(req, res){
		// res.render('translate');
		var startData = req.query.start;
		var endData = req.query.end;
		var wordData = req.query.word;
		// console.log(startData);
		// console.log(endData);
		// console.log(wordData);
	

	
		beglobal.languages.all(function(err, results){
	   		if (err) {
	      		return console.log(err);
	    	}

	    	var startCode = '';
	    	var endCode = '';

	    	// console.log(results);
	   
    			
			for (var i = 0; i <results.length; i++){
  				if (startData === results[i].from.name){
  					startCode = results[i].from.code;
  				}
	  		}

	  		for (var i = 0; i <results.length; i++){
  				if (endData === results[i].from.name){
  					endCode = results[i].from.code;
  				}
	  		}

	  		console.log(startCode);
	  		console.log(endCode);

	  		beglobal.translations.translate(
			{text: wordData, from: startCode, to: endCode}, function(err, results) {
				if (err) {
					return console.log(err);
				}
				var translated = results.translation;
				console.log(translated);
				res.send(translated);
			}
		);

	    });

	}
	  
		
};

module.exports = indexController;