$(document).on('submit', 'form#writing-answer-form', function(e) {
    e.preventDefault();

    var $form = $(this);

    $.nette.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: {
            do: $form.find('[name=_do]').val(),
            writing_answer: $form.find('[name=writing_answer]').val(),
            question_id: $form.find('[name=question_id]').val()
        }
    });
}); 