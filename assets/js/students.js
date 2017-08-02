$(document).ready(function() {
	
	var students = $('#students').DataTable({     	
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

    

    database.ref('/rel_electiva_users/electives/'+$("#elective").val()).once('value').then(function(snapshot) {
		students.clear().draw();
        var cont = 1;
        snapshot.forEach(function(childSnapshot) {
            database.ref('/users/'+childSnapshot.val()).once('value').then(function(users) {
                
                students.row.add([
                    cont,
                    users.val().name,
                    users.val().email
                ]).draw();
                cont++;
            },function (error) {

                // body...
            });

        });
	  
	  
	}, function (error) {
		// body...
	});

});