$(document).ready(function() {
    $(".head").mouseenter(function() {
        $(".tongue").animate({height: '150px'}, 500);
        $(".tongue").animate({height: '0px'}, 500);
    });

    $("#enter").click(function() {
        $(".tongue").animate({height: '150px'}, 500);
        $(".container").delay(800).fadeOut();
        var url = "http://mtm_intern.dev/partials/welcome.html";
        $(location).delay(1000).attr('href',url);
    });
});
