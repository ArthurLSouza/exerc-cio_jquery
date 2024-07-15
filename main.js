$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        var novaTarefa = $('#tarefaInput').val().trim();

        if (novaTarefa !== '') {
            var li = $('<li></li>').text(novaTarefa);
            $('#listaTarefas').append(li);
            $('#tarefaInput').val(''); // Limpa o campo de entrada
        }
    });

    // Função para marcar uma tarefa como concluída
    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});