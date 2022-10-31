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
        760:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
        300:{
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

    // $('.sub-menu li').each(function(index){
    //   $(this).attr('data-index',index);
    // });

    // $('.sub-menu li').click(function(){
    //   let a = $(this).attr('data-index');
    //   $('html,body').animate({
    //     scrollTop : wh * a
    //   });
    // });

    // $(window).scroll(function(){
    //   let sct = $(window).scrollTop();

    //   if(sct >= 0 && sct < wh){
    //     $('.sec-1').fadeOut(500);
    //   }
    // });

    
    const sec1 = $('.sec-1').offset().top-100;
    const sec2 = $('.sec-3').offset().top-100;
    const sec3 = $('.sec-4').offset().top;
    const sec4 = $('.sec-5').offset().top;
    const sec5 = $('.sec-6').offset().top;

    $('.tab1').click(function(){
      $('html,body').animate({
        scrollTop : sec1
      });
    });
    $('.tab2').click(function(){
      $('html,body').animate({
        scrollTop : sec2
      });
    });
    $('.tab3').click(function(){
      $('html,body').animate({
        scrollTop : sec3
      });
    });
    $('.tab4').click(function(){
      $('html,body').animate({
        scrollTop : sec4
      });
    });
    $('.tab5').click(function(){
      $('html,body').animate({
        scrollTop : sec5
      });
    });


    $('.bar').click(function(){
      $('.sub-menu').toggleClass('active');
    });
    $('.search').click(function(){
      $('.search_form').addClass('active');
    });
    $('.cancel').click(function(){
      $('.search_form').removeClass('active');
    });
});
