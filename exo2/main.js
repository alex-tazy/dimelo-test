(function($) {
    $(document).ready(function() {
        var nbSelect = $("#nombres"),
            options = nbSelect.find('option');
        $("#choix").on('change', function() {
            nbSelect.html(options.filter('[value="' + this.value + '"]'));
        }).trigger('change');
    });
})(jQuery);