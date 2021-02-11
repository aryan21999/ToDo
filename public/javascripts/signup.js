function userSignUp() {
	var email = document.getElementById("signUpEmail").value;
    var pass = document.getElementById("signUpPassword").value;
    var passV = document.getElementById("signUpPasswordV").value;
    var password = '';
    if(pass===passV)
        {
            alert('ok');
            password=pass;
        }
        else{
             alert('password is not matching with repeat password');
             return false;
        }
    //var password = pass;
	if (email && password===pass) {
		axios.post('/api/addUser', {
			email: email,
			password: password
		})
			.then(function (response) {
				if (response.data.status == "added successfully") {
					location.replace('/signin');
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