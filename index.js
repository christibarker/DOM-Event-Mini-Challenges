var changeKey = []

document.addEventListener('keyup', function(e){
	changeKey.push(e.key);
	document.getElementById('letter').innerHTML = changeKey.join('');
});


