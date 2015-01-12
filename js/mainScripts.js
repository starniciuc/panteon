$( document ).ready(function() {
    $('.morePay').hide();
    
    $('.payPreW a').click(function(){
        $(this).hide().parent().next().show();
    });
    $('.morePay a').click(function(){
        $(this).parent().prev().children().show();
        $(this).parent().hide();
    });
    
    $('.popoverAction').click(function(){
        $(this).next().show();
    });
    
     $('.PopRefa').click(function(){
        $(this).hide();
     });
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".regGroup").addClass(("scrolling"));
        }
        else{
            $(".regGroup").removeClass(("scrolling"));
        }
    });
});

