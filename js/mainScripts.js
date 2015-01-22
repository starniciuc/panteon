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
    
    $(".goInvest > a").click(function(){
        if($(window).width()<768){
            $(".investors-hover").hide();
            var $p = $(this).parents(".goInvest");
            var c = $p.find(".investors-hover");
            //console.log(c);
            c.css("display","block");
        }else{
            $(".investors-hover").hide();
        }
    });
});

