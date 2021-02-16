/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function($) {
  'use strict'


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function(event) {
      let $anchor = $(this)
      let headerH = '0'
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        )
      event.preventDefault()
    })
  }

  /* ==================================================
# Show/Hide search
===================================================*/
  function showHideSearch() {
    $('.search-toggle').on('click', function(event) {
      $('.search-box').toggle('fast')
    })
  }

  function slickVertical() {
    if ($(window).width() <= 576) {
      $('.js-slick-vertical').slick({
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        verticalSwiping: true,
        arrows: true
      })
    }
  }

  function btnSwitch(){
    $('body').on('click', '.btn-switch', function() {
      $('.search-map').toggleClass('d-none');
      $('.result').toggleClass('d-none');
      $(this).text($(this).text() == 'List' ? 'Map' : 'List');
    })
  }

  function init() {
    scrollToAnchor()
    getBarwidth()
    showHideSearch()
    slickVertical()
    btnSwitch()
  }

  $(document).ready(function() {
    init()
  }) // end document ready function

  $(window).on('scroll', function() {
  })

  // if ($('.x-toTop').length) {
  //   let scrollTrigger = 100, // px
  //     backToTop = function () {
  //       let scrollTop = $(window).scrollTop();
  //       if (scrollTop > scrollTrigger) {
  //         $('.x-toTop').addClass('active');
  //       } else {
  //         $('.x-toTop').removeClass('active');
  //       }
  //     };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  // }

})(jQuery) // End jQuery
