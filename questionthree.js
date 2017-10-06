var changeKey =

document.addEventListener('keyup', function(e){
	changeKey = String(e.key);
	document.getElementById('letter').innerHTML = changeKey;
});


