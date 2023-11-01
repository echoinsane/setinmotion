$(function () {
    $('.block').mouseenter(function() {
        $(this).children('.zoom_icon').stop(true, true).animate({ opacity: 1}, 'fast');
        $(this).children('.block_price').css('background','#caebff');
        $(this).children('.block_price').css('border-top','1px solid #c2e2f5');
        $(this).children('a.basket_2').children('.block_basket').attr('src','img/service/basket-blue.png');
    });
    $('.block').mouseleave(function() {
        $(this).children('.zoom_icon').animate({ opacity: 0}, 'fast');
        $(this).children('.block_price').css('background','#e8e8e8');
        $(this).children('.block_price').css('border-top','1px solid #dfdfdf');
        $(this).children('a.basket_2').children('.block_basket').attr('src','img/service/basket-gray.png');
    });
});