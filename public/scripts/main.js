$(document).on('ready', function(){

	$('.translate').on('submit', function(e){
		e.preventDefault();
		var findWord = {
		word: $('[name="word"]').val()
		};
		console.log(findWord);
		$.get('/translate', findWord, function(dataFromServer){
		});
	});

	$('.translate').on('submit', function(e){
		e.preventDefault();
		var findWord = {
		word: $('[name="word"]').val()
		};
		console.log(findWord);
		$.post('/addWord', findWord, function(dataFromServer){
		});
	});


});