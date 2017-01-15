/**
 * Created by Aashish on 1/15/2017.
 */
$(document).ready(function () {

  // Sticky Navigation
  $('#features').waypoint(function (direction) {
    if (direction === 'down') {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  }, {
    offset: '15%'
  });

  // Scroll effects
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('#plans').offset().top}, 2500);
  });

  $('.js--scroll-to-info').click(function () {
    $('html, body').animate({scrollTop: $('#features').offset().top}, 500);
  });

  // Navigation scroll
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Animations on scroll
  $('.js--features-scroll').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '10%'
  });

  $('.js--steps-scroll').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated slideInUp');
  }, {
    offset: '10%'
  });

  $('.js--cities-scroll').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '10%'
  });

  $('.js--plans-scroll').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '10%'
  });

  $('.js--meals-scroll').waypoint(function (direction) {
    $('.js--wp-5').each(function () {
      $(this).addClass('animated zoomIn');
    })
  }, {
    offset: '50%'
  });

  $('.mobile-nav-icon').click(function () {
    var nav = $('.main-nav');
    var icon = $('.mobile-nav-icon i');
    nav.slideToggle(200, function () {
      icon.toggleClass('ion-navicon-round');
      icon.toggleClass('ion-close-round');
    })
  });
  
});