$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const itemDigitado = $('#tarefa-digitada').val();
        const novoItem = $('<li></li>').text(itemDigitado);

        novoItem.text(itemDigitado).appendTo('ul');

        novoItem.click(function() {
        $(this).css('text-decoration', 'line-through');

        $(document). on('submit',function() { 
            $("input"). val(""); $("textarea")
            })
        });
    });
})