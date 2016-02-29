// create the back to top button
$('footer').prepend('<a href="#" class="back-to-top"><i class="fa fa-arrow-up fa-3"></i></a>');

var amountScrolled = 400;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});
