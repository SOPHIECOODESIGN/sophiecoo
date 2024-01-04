// blurTriggerにblurというクラス名を付ける

function BlurTextAnimeControl() {
  $('.blurTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');
    }else{
    $(this).removeClass('blur');
    }
    });
}

//スクロールをしたらじわ
$(window).scroll(function () {
  BlurTextAnimeControl();
});
