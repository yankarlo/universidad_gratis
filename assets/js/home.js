$(document).ready(function() {
	var electives = $('#table-my-elctives').DataTable({     	
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


    

    database.ref('/rel_electiva_users/users/'+$("#uid").val()+'/notes').once('value').then(function(snapshot) {
		 
		console.info(snapshot.val());
        snapshot.forEach(function(childSnapshot) {

            database.ref('/electives/'+childSnapshot.key).once('value').then(function(elc) {
                console.info(elc.val().used_places)
                if (elc.val().state === 1)
                electives.row.add([
                    elc.val().name,
                    elc.val().description,
                    elc.val().teacher,
                    elc.val().quota - elc.val().used_places,
                    childSnapshot.val()

                ]).draw();
            },function (error) {

                // body...
            });

        });

	  
	}, function (error) {
		// body...
	});
});