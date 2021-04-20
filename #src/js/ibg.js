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

