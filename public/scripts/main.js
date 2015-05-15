$(document).on('ready', function(){

	$('.translate').on('submit', function(e){
		e.preventDefault();
		var findWord = {
			start: $('[name="startLanguage"]').val(),
			end: $('[name="endLanguage"]').val(),
			word: $('[name="word"]').val()
		};
	
		console.log(findWord);

		$.get('/translate', findWord, function(dataFromServer){
			console.log('data: ' + dataFromServer);
			$('body').append(dataFromServer);
		});


	});

	


});