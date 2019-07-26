$(document).on('change', 'form#frm-filterResultsForm select', function(e) {
    //e.preventDefault();

    const $form = $('form#frm-filterResultsForm');

    const data = {
        'subject': $form.find('[name=subject]').val(),
        'category': $form.find('[name=category]').val(),
        'level': $form.find('[name=level]').val(),
        'topic': $form.find('[name=topic]').val(),
        'subtopic': $form.find('[name=subtopic]').val()
    };

    $.nette.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: {
            do: $form.find('[name=_do]').val(),
            subject: data.subject,
            category: data.category,
            level: data.level,
            topic: data.topic,
            subtopic: data.subtopic,
        }
    }).done(function() {
        $('.selectpicker').selectpicker('refresh');
    });
});