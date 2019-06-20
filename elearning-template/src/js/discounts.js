$(document).on('change', 'form#frm-discounts-filterForm input:radio', function(e) {
    //e.preventDefault();

    var $form = $('form#frm-discounts-filterForm');

    $.nette.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: {
            do: $form.find('[name=_do]').val(),
            discount_percent: $form.find('input:radio:checked').val(),
            discount_country: $form.find('select[name="discount_country"]').val(),
            discount_city: $form.find('input[name="discount_city"]').val()
        }
    });
});

$(document).on('change', 'form#frm-discounts-filterForm select[name="discount_country"]', function(e) {
    //e.preventDefault();

    var $form = $('form#frm-discounts-filterForm');

    $.nette.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: {
            do: $form.find('[name=_do]').val(),
            discount_percent: $form.find('input:radio:checked').val(),
            discount_country: $form.find('select[name="discount_country"]').val(),
            discount_city: $form.find('input[name="discount_city"]').val()
        }
    });
});

$(document).on('keyup blur', 'form#frm-discounts-filterForm input[name="discount_city"]', function(e) {
    //e.preventDefault();

    //if($(this).val().length >= 3) {

        var $form = $('form#frm-discounts-filterForm');

        $.nette.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: {
                do: $form.find('[name=_do]').val(),
                discount_percent: $form.find('input:radio:checked').val(),
                discount_country: $form.find('select[name="discount_country"]').val(),
                discount_city: $form.find('input[name="discount_city"]').val()
            }
        });

   // }
});


// transform url to link in discount detail
// Get each div
$('.url-to-link').each(function(){
    // Get the content
    var str = $(this).html();
    // Set the regex string
    var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig
    // Replace plain text links by hyperlinks
    var replaced_text = str.replace(regex, "<a href='$1' target='_blank'>$1</a>");
    // Echo link
    $(this).html(replaced_text);
});
