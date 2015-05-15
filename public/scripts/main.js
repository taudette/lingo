$(document).on('ready', function(){

	$('.translate').on('submit', function(e){
		e.preventDefault();
		var findWord = {
			start: $('[name="startLanguage"]').val(),
			end: $('[name="endLanguage"]').val(),
			word: $('[name="word"]').val()
		};
		
		console.log(findWord);
		//dataFromServer represents the content of the page requested
		$.get('/translate', findWord, function(dataFromServer){
			console.log('data: ' + dataFromServer);
			$('h2').append(dataFromServer);
		});
		$('.translate')[0].reset();
	});
	$('.refresh').on('click', function(){
		location.reload();
	});

});