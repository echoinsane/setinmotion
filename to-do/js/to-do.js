/**
 * Created by DMM on 30.10.13.
 */
//localStorage.clear();
$(function () {
    if (localStorage.getItem('counter') == null){
            localStorage.setItem('counter','0');
    }
    $.each(localStorage,function(key,value){
        if (key != 'counter' ) {
             $('.storage').append('<div class="quest" id="' + key + '">' + value + '<img class="delete_first" src="http://setinmotion.ru/to-do/img/delete_first.png"/>' +
                                                                                   '<img title="Delete" class="delete" src="http://setinmotion.ru/to-do/img/delete.png"/>' +
                                                                                   '<img class="delete_last" src="http://setinmotion.ru/to-do/img/delete_last.png"/>' +
                                                                                    '</div>');
        }
    });
    $('.button').click(function() {
        submit_Handler();
    });
    $('input').keypress(function(event) {
        if (event.keyCode == 13) {
            submit_Handler();
        }
    });
    $(document).on('click', 'img.delete',function(){
        var id = $(this).parent().attr("id");
        localStorage.removeItem(id);
        $(this).parent().animate({ opacity: 0, right: "-=200" }, 'slow', function(){
            $(this).remove();
        });
        console.log(localStorage);
    });
    console.log(localStorage);

    function submit_Handler()
    {

        var input = $('input');
        var toAdd = input.val();
        var i = localStorage.getItem('counter');
        if (toAdd == '') {
            alert('Вы ничего не ввели!');
        }
        else {
        localStorage.setItem(i,toAdd);
        $('.storage').append('<div class="quest opacity" id="' + i + '">' + toAdd + '<img class="delete_first" src="http://setinmotion.ru/to-do/img/delete_first.png"/>' +
                                                                                    '<img title="Delete" class="delete" src="http://setinmotion.ru/to-do/img/delete.png"/>' +
                                                                                    '<img class="delete_last" src="http://setinmotion.ru/to-do/img/delete_last.png"/>' +
                                                                                    '</div>');
        $('.opacity').show().animate({ opacity: 1, bottom: "+=20" }, 'slow');
        $('.quest').removeClass('opacity');
        input.val(null);
        i++;
        localStorage.setItem('counter', i);
        console.log(localStorage.getItem('counter'));
        console.log(localStorage);
        return false;
        }
    }
});