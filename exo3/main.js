(function($) {
    $(document).ready(function() {
        $.ajax({
            url: "https://api.github.com/users/alexca93/repos",
            type: "GET",
            dataType: 'json',
            success: function(data) {
                $.each(data, function(index, element) {
                    $('#container').append($('<p>', {
                        text: element.name
                    }));
                });
            },
            failure: function() {
                alert("Error");
            }
        });
        $(document).ajaxComplete(function(event, xhr, settings) {
            if (settings.url = "https://api.github.com/users/alexca93/repos")
                console.log(settings.url);
        });
    });
})(jQuery);