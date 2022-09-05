$(document).ready(function(){

    $('.window').click(function(){
        $(this).css('display','none');
        $('.res-menu').css('display' , 'none')
    })

    $('.btn-open').click(function(){
        $('.res-menu').css('display','block');
        $('.window').css('display','block');
    })

    $('.fa-times-circle').click(function(){
        $('.res-menu').css('display' , 'none')
        $('.window').css('display' , 'none')
    })

})