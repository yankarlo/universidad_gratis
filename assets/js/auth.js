$(document).ready(function() {
	
	$(function() {
	    $('#login-form-link').click(function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').click(function(e) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});

	});

	firebase.auth().signOut();

	$("#login-form").submit(function (e) {
		e.preventDefault();
		
		var username = String($("#username").val()), password = String($("#password").val());
		
		login(username,password);
    	
	    
	});

	function login(username,password) {
		firebase.auth().signInWithEmailAndPassword(username, password).then(function (user) {
			authentication();
		}, function (error) {
			var errorCode = error.code;
	      	var errorMessage = error.message;
	      	console.info(firebase.auth().currentUser);
	      	 
	      	if (errorCode === 'auth/wrong-password') {
	          	swal("Error!", "Contraseña incorrecta.", "error");
	        }else if(errorCode === 'auth/wrong-email'){
	        	swal("Error!", "Correo incorrecto.", "error");
	        }else if(errorCode === 'auth/invalid-email'){
	        	swal("Error!", "Correo invalido.", "error");
	        }else if(errorCode === 'auth/user-not-found'){
	        	swal("Error!", "Correo no existe.", "error");
	        }else {
	          	alert(errorMessage);
	        }
	        console.log(error);
		});
	}

	function authentication() {
		var base = $("#base").val();
		var session = firebase.auth().currentUser;
		var language = $("#language").val();
		if (session != null) {
	    	console.info(language);
	    	
		    database.ref('/users/'+session.uid).once("value")
		    .then(function(snapshot) {
		      	if (snapshot.val() != null) {	      		
					var base_url = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
		        	var data = {"name":snapshot.val().name,"email":snapshot.val().email, "rol":snapshot.val().rol, "language":language, 
		        	"uid":firebase.auth().currentUser.uid};
		            
		            $.ajax({
	                    url: base+"/login/login_in",
	                    type:"POST",
	                    data:data
	                }).done(function(respuesta){
	                   	console.info(respuesta);
	                   	var resultado = $.parseJSON(respuesta);

	                   	window.location = base+"/"+resultado;                   	             

	                }).fail(function(respuesta){

	                }); 	        

		      	} else {
		        	console.info("mal");
		      	}
		      
		    });		    
		    
		    	    
		    
    	}
	}


	$("#register-form").submit(function (e) {
		e.preventDefault();		
		var data = $(this).serializeArray();

		
		if(data[2].value ===  data[3].value){
			swal({
			  	title: "Estas Seguro?",
			  	text: "",
			  	type: "warning",
			  	showCancelButton: true,
			  	confirmButtonColor: "#59B2E0",
		  		confirmButtonText: "Si, adelante!",
		  		cancelButtonText: "No, gracias",
			  	closeOnConfirm: false
			},
			function(){
			  	console.info(data[0].value);
			  	var val = true;
				firebase.auth().createUserWithEmailAndPassword(data[1].value, data[2].value).then(function (user) {
					console.info(user);
					swal("Registro Exioso!", "Seras ingresado en un momento.", "success");
					writeUserData(user.uid,data[0].value.toUpperCase(), user.email,data[2].value);
					setTimeout(function () {
						login(data[1].value, data[2].value);		
					},3000);
					

					$("#register-form")[0].reset();
				},function (error) {
					var errorCode = error.code;
				  	var errorMessage = error.message;
				  	
				  	console.info(error);
				  	if (error) {
				  		val = false;
				  		if (error.code = "auth/email-already-in-use") {
				  			
					  		swal("Error!", "Correo en uso.", "error");

					  	} else {
					  		alert(errorMessage);
					  	}
				  	}
				});
			});
			/**/
			
		}else{
			$('#confirm_password').popover("show");
			setTimeout(function () {
				$('#confirm_password').popover('hide');
				$('#confirm_password').popover('destroy');			
			},2000);
		}
	});

	function writeUserData(userId, name, email, password) {
	  	firebase.database().ref('users/' + userId).set({
		    name: name,
		    email: email,
		    password: password,
		    rol: 'student'
	  	});
	}

	$("#language").on("change", function () {
		var base = $("#base").val();
		console.info(base+"/language/"+$(this).val());
		window.location = base+"/login/language/"+$(this).val();	
	});

	$("#language").val($("#lang").val());
	

    
});