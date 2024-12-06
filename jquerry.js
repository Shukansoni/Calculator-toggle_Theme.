$(document).ready(function(){
    $('.toogle').click(function(){
        $('.container').toggleClass("change-background");
        $('button').toggleClass("toogle2");
        $('.btn2').toggleClass("btns2");
        $('.btn3').toggleClass("btns3");
        $(this).css("border","2px solid #000");
        $('span').text(
            $('span').text()=="Light Mode"?"Dark Mode" : "Light Mode"
        );
    });
    $('.toogle').click(function(){
        $(this).find('i').toggleClass('fa-moon fa-sun');
    });
});