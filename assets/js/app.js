$(document).ready(function() {

  // $('.challenge_hidden_btn').click(function(){
  //   var btn = $('.challenge_hidden_btn');
  //   $('.challenge_hidden').slideToggle('slow', function(){
  //     if ($('.challenge_hidden').is(':visible')) {
  //       btn.text('Read Less');
  //     }
  //     else {
  //       btn.text('Read More');
  //     }
  //   });
  // });
    // For PagePiling
  $('#pagepiling').pagepiling({
      menu: '.menu',
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,
      sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
      navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5']
      },

      //events
      
      
      afterRender: function(anchorLink, index){
        NavbarVisible();
        pageCount();
      },
      afterLoad: function(anchorLink, index){
        NavbarVisible();
        pageCount();
      }
  });
    // End
});

$(document).ready(function() {
  $('.simplifying__slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.next__icon',
    prevArrow: '.prev__icon' ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    },
    ]});
});
$(document).ready(function() {
    // For Slick
    $('.slick__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '.next__icon',
        prevArrow: '.prev__icon' ,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        },
        ]});
    
        $('.slick__slider__digital').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '.next__icon__digital',
        prevArrow: '.prev__icon__digital' ,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        },
        ]});
    // End

    // For Slick
    $('.slick__scroller__slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '.next__icon',
      prevArrow: '.prev__icon' ,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      },
      ]});
  // End
    $('.isotope').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
    
});

$(document).ready(function(){
  $('.slick_single_item').slick({
    autoplay: false,
    infinite: true,
    dots: true,
    speed: 3000,
    nextArrow: '.next__icon',
    prevArrow: '.prev__icon',
  });
});
$(document).ready(function(){
  $('.slick_single_item_02').slick({
    autoplay: false,
    infinite: true,
    speed: 2000,
    nextArrow: '.next__icon__02',
    prevArrow: '.prev__icon__02',
  });

  $('.slick_slider_dot').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    speed: 3000,
  });
});


//navbar active deactive function
function NavbarVisible () {
  if($('.pp-section.active').hasClass('navbar-is-visible')) {
      $('.main_menu').addClass('navbar-visible');

  }

  else{
      $('.main_menu').removeClass('navbar-visible');
  }
}
// Index Page Counter Function
function pageCount () {
  if($('.pp-section.active').attr('pageid')) {
    $('.pageNo').html($('.pp-section.active').attr('pageid'));
    $('.page__number').addClass('page_count');
  }
  else {
    $('.page__number').removeClass('page_count');
  }
}

//Side menu active and deactive
$(function(){
  $('#sidenav_button').on('click', function(){
    $('.sidemenu__part').toggleClass('onScreen');
    if($('.sidemenu__part').hasClass('onScreen')) {
      $('.collapse__bar').html('<i class="fas fa-times"></i>');
      $('.non_index').removeClass('position-relative');
      $('.non_index').addClass('position-fixed');

      //menu css
      $('.logo').css({'visibility':'hidden', 'opacity': '0'});
      $('.menu').css({'visibility':'hidden', 'opacity':'0'});
      $('.main_menu').css({'background':'transparent'});
      $('.padding_top').css({'padding-top':'100px'});
    }
    else {
      $('.collapse__bar').html('<i class="fas fa-bars"></i>');
      $('.non_index').removeClass('position-fixed');
      $('.non_index').addClass('position-relative');
      $('.padding_top').css({'padding-top':'0px'});

    //menu css
    $('.logo').removeAttr('style');
    $('.menu').removeAttr('style');
    $('.main_menu').removeAttr('style');
    }
  })

  //check on load if side menu is active
  if($('.sidemenu__part').hasClass('onScreen')) {
    $('.collapse__bar').html('<i class="fas fa-times"></i>');
    $('.non_index').removeClass('position-relative');
    $('.non_index').addClass('position-fixed');

          //menu css
          $('.logo').css({'visibility':'hidden', 'opacity': '0'});
          $('.menu').css({'visibility':'hidden', 'opacity':'0'});
          $('.main_menu').css({'background':'transparent'});
          $('.padding_top').css({'padding-top':'100px'});
  }
  else {
    $('.collapse__bar').html('<i class="fas fa-bars"></i>');
    $('.non_index').removeClass('position-fixed');
    $('.non_index').addClass('position-relative');
    $('.padding_top').css({'padding-top':'0px'});

    //menu css
    $('.logo').removeAttr('style');
    $('.menu').removeAttr('style');
    $('.main_menu').removeAttr('style');
  }

});

//wow
// new WOW().init();

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane',
});

$(document).ready(function(){
  $('.side__menu').click(function(){
      $('.side__drop__menu').toggle();
  });
  $('.side__menu__02').click(function(){
      $('.side__drop__menu__02').toggle();
  });
});