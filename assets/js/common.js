$(function () {


    //smooth scroll to top
    $(".totop a").click(function () {
        //----somootにtop=0の位置まで0.5秒かけてscroll
        $("html, body").animate({ scrollTop: 0/*pege top*/ }, 800);
        return false;
    });

});


