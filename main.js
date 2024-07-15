$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
        event.preventDefault(); 
        var novaTarefa = $('#tarefaInput').val().trim();

        if (novaTarefa !== '') {
            var li = $('<li></li>').text(novaTarefa);
            $('#listaTarefas').append(li);
            $('#tarefaInput').val(''); 
        }
    });
     $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
