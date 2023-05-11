$(document).ready(function () {
    $(".menu li a").hover(
        function () {
            var link = $(this).attr("href");
            var previewElement = $("#preview");
            previewElement.hide();
            
            $.ajax({
                url: link,
                type: 'GET',
                success: function (data) {
                    previewElement.html(data);
                },
                error: function () {
                    previewElement.html('<p>Error al cargar la página</p>');
                },
                complete: function () {
                    previewElement.show();
                    previewElement.css({
                        top: $(this).offset().top + 30,
                        left: $(this).offset().left + 10,
                    });
                }
            });
        },
        function () {
            $("#preview").hide();
        }
    );
});
