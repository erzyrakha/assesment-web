$(document).ready(function() {
    $('#searchIcon').on('click', function() {
        $('#searchInput').fadeToggle('fast');
        $('#searchInput').focus();
    });

    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        var $elements = $('.isi');
        var $matchingElements = $elements.filter(function() {
            return $(this).text().toLowerCase().indexOf(value) > -1;
        });
        $elements.hide();
        $matchingElements.show();

        if ($matchingElements.length === 0) {
            $('#searchNotFound').show();
        } else {
            $('#searchNotFound').hide();
        }
    });

    $('#searchInput').on('focusout', function() {
        $(this).fadeOut('fast');
    });

    $(document).on('keydown', function(event) {
        if (event.key === 'Escape') {
            $('#searchInput').fadeOut('fast');
            $('#searchNotFound').hide(); // Sembunyikan pesan pencarian tidak ditemukan saat menutup input
        }
    });
});



