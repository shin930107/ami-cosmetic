$(document).ready(function(){
  
  $('.article-wrap').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    fade: true
  });

  
  let $win = $(window),
      $header =$('.gnb-wrap'),
      $headerclone = $header.contents().clone(),
      $headerclonecon = $('<div class="gnb-wrap_clone"></div>'),
      headerTop = $header.offset().top + $header.outerHeight()

  $('body').append($headerclonecon);
  $headerclonecon.append($headerclone);
  $win.scroll(function(){
    if($win.scrollTop()>headerTop){
      $headerclonecon.addClass('sticky');
    }else{
      $headerclonecon.removeClass('sticky');
    }
  });


  // 슬라이드
  let $slideGroup = $('.slide-area'),
      $slide = $('.slide');

  $('.prev').click(function(){
    $slideGroup.animate({left: -20 * index + '%'});
  });


  // 햄버거버튼 메뉴 펼치기 


////////////////////////////////////////////////

});