



function navbarScroll() {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
}

$(document).ready(() => {
    $("#HomePage .navbar").delay(2000).animate({
        top:
            "30px"
    }); $("#AboutUs .navbar").delay(1000).animate({ top: "20px" });
    $("#Services .navbar").delay(1000).animate({ top: "20px" }); $("#Activities .navbar").delay(1000).animate({ top: "20px" }); $("#Contact.navbar")
        .delay(1000).animate({ top: "20px" }); $("#Projects .navbar").delay(1000)
            .animate({ top: "20px" }); $("#Gallery .navbar").delay(1000).animate({
                top:
                    "20px"
            }); $("#navbarHamburger").click(function () {
                $(this).toggleClass("open");
            });
});
$(window).scroll(function () { requestAnimationFrame(navbarScroll); });
