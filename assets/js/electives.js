$(document).ready(function() {
	var electives = $('#table').DataTable({     	
        "language": {
            "decimal":        "",
            "emptyTable":     "Busca primero en base de datos",
            "info":           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            "infoEmpty":      "Mostrando 0 a 0 de 0 entradas",
            "infoFiltered":   "(Filtrada de las _MAX_ entradas totales)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Ver _MENU_ entradas",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "Buscar en tabla:",
            "zeroRecords":    "No se encontraron registros coincidentes",
            "paginate": {
                "first":      "Primero",
                "last":       "Ultimo",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": activar para ordenar la columna ascendente",
                "sortDescending": ": activar para ordenar la columna descendente"
            }

        }
    });

	var ref = database.ref('/electives/');
	function table() {
		electives.clear().draw();
		
		ref.on('child_added', function(data) {
				if(data.val().state === 1)
					electives.row.add([
			        data.val().name,
			        data.val().description,
			        data.val().teacher,
			        data.val().quota - data.val().used_places,
			        '<button type="button" elective="'+data.key+'" class="btn btn-primary students " aria-label="Justify"><span class="glyphicon glyphicon-list" aria-hidden="true"></span></button>',
			        '<button type="button" elective="'+data.key+','+data.val().used_places+'" class="btn btn-success add" aria-label="Justify"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'
		        ]).draw();
		  //addCommentElement(postElement, data.key, data.val().text, data.val().author);
		});
	}

	

	table();


	$("#table tbody").on("click",".students",function(){
		var base = $("#base").val();
	 	console.info($(this).attr('elective'));
	 	console.info(base);

	 	window.location = "electives/students/"+$(this).attr('elective');
	});
    

    $("#table tbody").on("click",".add",function(){
    	var position;
    	var elective = $(this).attr('elective').split(",");

	 	database.ref('/rel_electiva_users/electives/'+elective[0]).orderByValue().equalTo(firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
	 		//console.info(snapshot.val())

	 		if(snapshot.val()){
	 			swal("Error!", "Ya estas registrado en esta electiva", "error")
	 		}else{
	 			swal({
					title: "Estas seguro?",
					text: "Estas apunto de registrarte!",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#337ab7",
					confirmButtonText: "Si, adelante!",
					cancelButtonText: "No",
					closeOnConfirm: false
				},
				function(){
					database.ref('rel_electiva_users/electives/'+elective[0]).orderByValue().limitToLast(1).once('value').then(function(snapshot) {		
						
						
						console.info(snapshot.val());
						if (snapshot.val()) {
							database.ref('rel_electiva_users/electives/'+elective[0]).orderByValue().limitToLast(1).once('value').then(function(num) {		
								console.info(num.val());
								
									num.forEach(function(childSnapshot) {
										position = parseInt(childSnapshot.key)+1;
									});
								
								
								console.info(position);

								snapshot.forEach(function(childSnapshot) {
								    
								    
								});

								database.ref('/electives/'+elective[0]+"/used_places").set(parseInt(elective[1])+1);

								database.ref('/rel_electiva_users/users/'+firebase.auth().currentUser.uid+"/notes/"+elective[0]).set(0);

								
								
								table();

							},function () {
								// body...
							});
						} else {
							database.ref('/rel_electiva_users/electives/'+elective[0]+'/1').set(firebase.auth().currentUser.uid);
							database.ref('/electives/'+elective[0]+"/used_places").set(parseInt(elective[1])+1);

							database.ref('/rel_electiva_users/users/'+firebase.auth().currentUser.uid+"/notes/"+elective[0]).set(0);
						}
						
						swal("Registro exitoso!", "Tienes una nueva electiva a cruzar.", "success");
						
					},function () {
						// body...
					});				  	
				});
	 		}
		  	
		  
		}, function (error) {
			// body...
		});

		
	});
    

});