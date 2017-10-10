
document.getElementById('right').addEventListener('click', function (){
	document.getElementById('box-in-middle').innerText = "I'm Right!";
});

document.getElementById('left').addEventListener('click', function (){
	document.getElementById('box-in-middle').innerText = "No, I'm Right!";
});
