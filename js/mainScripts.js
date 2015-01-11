$( document ).ready(function() {
    $('.morePay').hide();
    
    $('.payPreW a').click(function(){
        $(this).hide().parent().next().show();
    });
    $('.morePay a').click(function(){
        $(this).parent().prev().children().show();
        $(this).parent().hide();
    });
    
    $('.PopRefa').hide();
    
    $('.popoverAction').click(function(){
        $(this).next().toggle();
    });
    
     $('.PopRefa').click(function(){
        $(this).hide();
     });
});

