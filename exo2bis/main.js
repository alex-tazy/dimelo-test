(function($) {
    $(document).ready(function() {
        var firstSelect = $("#un"),
        	selects = $("#deux, #trois, #quatre");
        firstSelect.change(function() {
        	var value = firstSelect.val();
        	reset();
        	if (value !== "")
        		$("#" + value).show();
        }).trigger('change');

        function reset() {
        	selects.hide();
        	selects.prop('selectedIndex', 0);
        }
    });
})(jQuery);