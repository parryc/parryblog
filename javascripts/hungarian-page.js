var h = window.hungarian,
	inflect = function(){
		var word = document.getElementById("word").value,
			tense = document.getElementById("tense").value,
			person = document.getElementById("person").value,
			answer = document.getElementById("answer"),
			button = document.getElementById("go"),
			verb;
		if(h.words[word] === undefined)
			h.word(word,"VERB");
		verb = h.words[word];

		console.log(person);

		answer.innerHTML = h.inflect(verb,person,tense);
		button.blur();
	},
	button = document.getElementById("go");


button.addEventListener("click",inflect);