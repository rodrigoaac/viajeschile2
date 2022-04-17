$(document).ready(function () {


    $("a").click(function () {
        var gato = thist.hash

        $("html, body").animate(
        {
            scrollTop: $(gato).offset().top -100
        },
        800
        )

    })


})