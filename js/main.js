const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.button__button-next',
    prevEl: '.button__button-prev',
  },
});


var homeName = $(".home__center__wrapper__name");
var homeFoto = $(".home__center__foto");
homeName.on("mousemove", function(event) {
  var activeContent = $(this).attr('data-target');
  homeFoto.removeClass("home__center__foto--visible")
  $(activeContent).addClass("home__center__foto--visible");
});
homeName.on("mouseout", function(event) {
  var activeContent = $(this).attr('data-target');
  homeFoto.removeClass("home__center__foto--visible")
  $(activeContent).removeClass("home__center__foto--visible");
});

vis.$("mousemove", function (event) {
  $(".home__center__foto").addClass(".home__center__foto--visible");
});

var no = $(".home__center__wrapper__name");
no.$("mouseout", function (event) {
  $(".home__center__foto").removeClass(".home__center__foto--visible");
});

var attr = $('[data-aos=flip-up]')
$('.header__right__pages').click(function() {
  $(this).addAttr(attr);
});




