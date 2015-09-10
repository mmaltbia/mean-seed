$.backstretch("../images/laptop.jpg");

$(document).ready(function(){
	
	$('#signup-div').hide();

	//	SHOW SIGNUP FORM ON 'NEW? SIGN UP HERE' CLICK
	$('#sign-up').on('click', function(event){
		event.preventDefault();
		$('#signup-div').show();
		$('#login-form').hide();
	});

	//	SHOW LOGIN FORM ON 'ALREADY REGISTERED? LOGIN HERE' CLICK
	$('#login').on('click', function(event) {
		event.preventDefault();
		$('#login-form').show();
		$('#signup-div').hide();
	});

	//	EMAIL ADDRESS ALREADY IN USE CHECK
	$('#signup-form').on('submit', function(event){
			// event.preventDefault();

	});

// // Login Authentication
//   $('#login-form').on("submit", function(event){
//     event.preventDefault();
//     var userData = {
//       email: $("#login-user-email").val(),
//       password: $("#login-user-password").val()
//     };

//     $.post('/login', userData, function(response){
//       console.log(response);
//     });
//   });

})

