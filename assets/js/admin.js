$(document).ready(function() {
	var electives = $('#table-electives').DataTable({     	
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
		console.info(ref);
		

		database.ref('/electives/').once('value').then(function(snapshot) {
			console.info(snapshot.val())
			var state = "";
			snapshot.forEach(function(childSnapshot) {
		    console.info(childSnapshot.val())
		    state = "Inactivo";
		    if (childSnapshot.val().state === 1) {
		    	state = "Activo";
		    } 
		    electives.row.add([
		        childSnapshot.val().name,
		        childSnapshot.val().description,
		        childSnapshot.val().teacher,
		        childSnapshot.val().quota,
		        childSnapshot.val().quota - childSnapshot.val().used_places,
		        state,
		        '<button type="button" elective="'+childSnapshot.key+'" class="btn btn-success elective " data-toggle="modal" data-target="#myModal" aria-label="Justify"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>',
		        '<button type="button" elective="'+childSnapshot.key+'" class="btn btn-danger delete "  aria-label="Justify"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'
	        ]).draw();

		    // ...
		  });
		},function () {
			// body...
		});
	}

	$("#add").on("click", function () {
		$("#myTitle").text($(this).attr('language'));
		$("#button_submit").text($(this).attr('language'));
		$("#form").attr('action', 'add').attr('action');
	});

	table();


	$("#table-electives tbody").on("click",".elective",function(){
		var id = $(this).attr('elective');
		$("#form").attr('action', 'edit').attr('action');
		$("#myTitle").text($("#edit").val());
		$("#button_submit").text($("#edit").val());
		database.ref('/electives/'+$(this).attr('elective')).once('value').then(function(elc) {				
			$("#name_elective").val(elc.val().name);
			$("#description_elective").val(elc.val().description);
			$("#teacher_elective").val(elc.val().teacher);
			$("#quota_elective").val(elc.val().quota);
			$("#used_elective").val(elc.val().used_places);
			$("#id_elective").val(id);
			
			
  		}, function (error) {
			// body...
		});
	});

	$("#table-electives tbody").on("click",".delete",function(){
		console.info($(this).attr('elective'));
		var id = $(this).attr('elective');
		swal({
			title: "Estas seguro?",
			text: "Estas apunto de inactivar esta electiva?",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#337ab7",
			confirmButtonText: "Si, adelante!",
			cancelButtonText: "No",
			closeOnConfirm: false
		},
		function(){
			console.info($(this).attr('elective'));
			database.ref('electives/'+id+'/state').set(0);
			swal("Eliminado Exitoso!", "Has eliminado una electiva", "success")
			table();
			
		});
	});

	$("#form").submit(function (e) {
		e.preventDefault();		
		var data = $(this).serializeArray();
		
		if ($(this).attr('action') === "add") {
			add(data);
		} else {
			edit(data);
		}


	});


	function add(data) {

		swal({
			title: "Estas seguro?",
			text: "Estas apunto de registra una nueva electiva?",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#337ab7",
			confirmButtonText: "Si, adelante!",
			cancelButtonText: "No",
			closeOnConfirm: false
		},
		function(){
		
			database.ref('electives').orderByValue().limitToLast(1).once('value').then(function(snapshot) {		
				
				snapshot.forEach(function(childSnapshot) {
				    console.info()
				    var id = parseInt(childSnapshot.key)+1;
				    swal("Registro Exitoso!", "Has registrado una nueva electiva", "success")
				    database.ref('/electives/' + id).set({
					    name: data[0].value,
					    description: data[1].value,
					    teacher: data[2].value,
					    quota: data[3].value,
					    used_places: 0,
					    state:1
				  	});
					$("#myModal").modal('hide');
					$("#form")[0].reset();
					table();
				});
			},function () {
				// body...
			});
		});
	}

	function edit(data) {
		if (parseInt(data[3].value) < parseInt(data[4].value)) {
			swal("Error!", "Los cupos no pueden ser mayor a los que ya estan en uso.", "error");
		} else {
			swal({
				title: "Estas seguro?",
				text: "Estas apunto de modificar esta electiva?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#337ab7",
				confirmButtonText: "Si, adelante!",
				cancelButtonText: "No",
				closeOnConfirm: false
			},
			function(){
				swal("Modificacion Exitosa!", "Has editado esta electiva", "success")
				$("#myModal").modal('hide');
				$("#form")[0].reset();

				database.ref('/electives/' + data[5].value).set({
				    name: data[0].value,
				    description: data[1].value,
				    teacher: data[2].value,
				    quota: data[3].value,
				    used_places: data[4].value,
				    state:1
			  	});
				table();
			  	
			});
			
			
		}
	}
	

    
});