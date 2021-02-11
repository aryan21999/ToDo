

function userLogin() {
	var email = document.getElementById("loginEmail").value;
	var password = document.getElementById("loginPassword").value;
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

function userSignUp() {
	var email = document.getElementById("signUpEmail").value;
	var password = document.getElementById("signInPassword").value;
	if (email && password) {
		axios.post('/api/addUser', {
			email: email,
			password: password
		})
			.then(function (response) {
				if (response.data.status == "added successfully") {
					// console.log('at front end', response);
					var html = '';
					html += '<p>Congratulations , you are registered!!</p>'
					html += '<p>Please sign in</p>'
					html += '<input type="text" name="email" id="loginEmail" placeholder="Enter email">'
					html += '<input type="text" name="Password" id="loginPassword" placeholder="Enter password">'
					html += '<button value="Submit" onclick="userLogin()">Login</button>'
					document.getElementById(`afterSignUp`).innerHTML = html;
				} else {
					location.reload();
					alert('already signed Up!  Please login');

				}
			})

	} else {
		location.reload();
		alert('email or password cannot be null!!');
	}
}







