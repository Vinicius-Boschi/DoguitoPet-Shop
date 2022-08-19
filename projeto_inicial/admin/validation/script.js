function senhaForte() { 
	let numbers = /([0-9])/
	let tiny = /([a-z])/
	let uppercase = /([A-Z])/
	let diferent = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

	if ($('#senha').val().length < 6) { 
		$('#status').html("<p class='input-fraco'>Fraco, insira no mínimo 6 letras</p>")
	} else {  	
		if ($('#senha').val().match(numbers) && $('#senha').val().match(tiny) && $('#senha').val().match(uppercase) && $('#senha').val().match(diferent)) { 
			$('#status').html("<p class='input-forte'>Forte</p>")
		} else { 
			$('#status').html("<p class='input-medio'>Médio</p>")
		}
	}
}