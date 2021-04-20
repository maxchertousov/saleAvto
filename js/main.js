
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function(support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }
});

//// плавный скролл
$("a[href^='#']").click(function(){
    _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top -50 + "px" });
    return false;
});

$(document).ready(function() {
    $('.wrapper').addClass('loaded');
    // работа бургера
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu__link').click(function(event) {
        $('.icon-menu, .menu__body').removeClass('active');
        $('body').removeClass('lock')
    });
    // функция backgrounda
    function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
    }
    ibg();
});

