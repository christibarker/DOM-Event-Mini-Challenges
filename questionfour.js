
// var num = 12345678
// var user = 'information'

document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();
	var userName = document.getElementById('userName').value;
	var password = document.getElementById('password').value;
	if (userName.length < 14 && password === '12345678') {
		document.getElementById('header').innerText = "Congrats on knowing your username and password!";
	} else {
		alert('Incorrect username or password');
	}
});
	
	
