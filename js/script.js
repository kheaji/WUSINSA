$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        effect:"fade",
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
    });

    var swiper = new Swiper(".secondSwiper", {
      speed: 1000,
      loop:true,
      // slidesPerView: 4,
      // spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1150: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1000:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
        800:{
          slidesPerView: 1,
          spaceBetween:0,
        }


      }
    });

    $(window).scroll(function(){
      const banner = $('.banner').offset().top;
      const sec1 = $('.sec-1').offset().top-300;
      const sec2 = $('.sec-2').offset().top-250;
      const sec3 = $('.sec-3').offset().top-350;
      const sec4 = $('.sec-4').offset().top-300;
      const sec5 = $('.sec-5').offset().top-350;
      const sec6 = $('.sec-6').offset().top-350;
      const footer = $('footer').offset().top;

      const sct = $(window).scrollTop();

      if(sct >= banner && sct < sec1){
        $('.sub-menu li').removeClass('active');
      }else if(sct >= sec1 && sct < sec2){
        $('.sub-menu li').addClass('active');
      }else if(sct >= sec2 && sct < sec3){
        $('.sub-menu li').removeClass('active');
      }else if(sct >= sec3 && sct < sec4){
        $('.sub-menu li').addClass('active');
      }else if(sct >= sec4 && sct < sec5){
        $('.sub-menu li').removeClass('active');
      }else if(sct >= sec5 && sct < sec6){
        $('.sub-menu li').addClass('active');
      }else if(sct>=sec6){
        $('.sub-menu li').removeClass('active');
      }
    });

    let sub = $('.sub-menu li')
    sub.on('click',function(){
      $('html,body').animate({
        


      });
    });
    
    $('.tab1').click(function(){
      $('.sec-1').animate();
    });

    $('.bar').click(function(){
      $('.sub-menu').toggleClass('active');
    });
});