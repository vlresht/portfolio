$(document).ready(function() {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
})