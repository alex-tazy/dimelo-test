(function($) {
    $(document).ready(function() {
        // 1.
        $("body").addClass('my-first-class');

        // 2.
        $("body").prepend('<a class="more" href="#none" title="Dernières questions">en voir +</a>');
        var link = $("a.more");
        link.attr('title', 'other title');
        link.html("see more");
        link.wrap('<div id="link_container"></div>');

        // 3. & 4.
        link.after('<br><input type="checkbox" class="checkbox">');

        function checked(checkbox) {
            if (checkbox.is(':checked')) {
                checkbox.addClass('active');
                checkbox.removeClass('inactive');
            } else {
                checkbox.removeClass('active');
                checkbox.addClass('inactive');
            }
        }
        var checkInput = $("input.checkbox");
        checked(checkInput);
        checkInput.click(function() {
            checked(checkInput);
        });

        // 5.
        checkInput.after('<div class="trois">trois</div><div class="un">un</div><div class="deux">deux</div>');
        $("div.trois").insertAfter("div.deux");
    });
})(jQuery);