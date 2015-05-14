$(document).on('ready', function(){

	$('.translate').on('click', function(e){
		e.preventDefault();
		
		var findWord = {
			word: $('[name="word"]').val()
		};

		$.get('/translate', findWord, function(dataFromServer){

		});




	});



});