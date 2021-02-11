function userSignIn() {
	var email = document.getElementById("signinEmail").value;
    var password = document.getElementById("signinPassword").value;
    
	axios.post('/api/authenticate', {
		email: email,
		password: password
	})
		.then(function (response) {
			console.log('singn in res', response);
			if (response.data.success && response.data.isLogged) {
				location.replace('/home')

			}//end of if
			else if (response.data.message == "Authentication failed. Wrong password.") {
				location.reload();
				alert('Wrong password.');
			}
			else if (response.data.message == "Authentication failed. User not found.") {
				location.reload();
				alert('Username not found! Please sign Up!');
			}
		})
}