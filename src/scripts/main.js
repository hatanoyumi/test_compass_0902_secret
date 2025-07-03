$(function () {
  
  var $toggleNotice = $('.js-toggleNotice').find('dt');
  $toggleNotice.next('dd').toggle();
  var $mq = $('#mq');
  var $entryBtn = $('.entry-bar');
  
  var media = 'sp';
  var scrollPoint;

  $(window).resize(function(){
    checkMedia($mq);
  });

  $(window).scroll(function() {
    scroll($mq, $entryBtn);
  });

  checkMedia($mq);
  noticeToggle($toggleNotice);
  smoothScroll();

  $modalBtn = $('.js-btn');
  $modalBtn2 = $('.js-btn2');
  $modalLayer = $('.layer-text');
  $modalBtn.click(function(){
    $modalLayer.removeClass('-show');
  });
  $modalBtn2.click(function(){
    $modalLayer.addClass('-show');
  });
});

function smoothScroll() {
  $('.js-scroll[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}

function scroll(mq, btn){
  if(mq == 'sp'){
    scrollPoint = 100;
  } else {
    scrollPoint = 200;
  }
  // console.log(scrollPoint);
  var scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  if(scrollTop >= scrollPoint){
    btn.addClass('css-fade1');
  }else{
    btn.removeClass('css-fade1');
  }
}

function checkMedia(dom) {
  if(dom.is(':visible')){
    $mq = 'sp';
  }else{
    $mq = 'pc';
  }
}

function noticeToggle(btn) {
  btn.click(function(){
    $(this).find('i').toggleClass('open');
    $(this).next('dd').slideToggle();
  });
}

