$(document).ready(function () {
  $('.bypass').click(function (event) {
    const pic = $(this).closest('.section').find('.carousel-item.active img').attr('src');
    $('.modal-body').css("background-image", `url(big_images/${pic})`);
    $('#exampleModal').modal('toggle');
  });
  $('.media').click(function (event) {
    const pic = $(this).find('img').attr('src');
    $('.modal-body').css("background-image", `url(${pic})`);
    $('#exampleModal').modal('toggle');
  });
  if ($(document).width() <= 576) {
    var hd = document.querySelectorAll(".carousel-section-hd");
    var jew = document.querySelectorAll(".carousel-section-jew");
    var sc = document.querySelectorAll(".carousel-section-sc");
    var hd_side = document.querySelectorAll(".side-section-hd");
    var jew_side = document.querySelectorAll(".side-section-jew");
    var sc_side = document.querySelectorAll(".side-section-sc");
    $(hd).addClass("order-12");
    $(jew).addClass("order-12");
    $(sc).addClass("order-12");
    $(hd_side).addClass("order-1");
    $(jew_side).addClass("order-1");
    $(sc_side).addClass("order-1");
  } else if ($(document).width() > 576) {
    var cat_carousel = document.querySelector(".carousel-section");
    var cat_side = document.querySelector(".side-section");
    $(cat_carousel).addClass("order-1");
    $(cat_side).addClass("order-12");
  }
  var ih = window.innerHeight;
  $('.section').css('max-height', ih)

  $('#hd-carousel').bind('slid.bs.carousel', function (e) {
    const x = $(this).find('.active .carousel-caption')[0].innerText;
    $(this).closest('.carousel-section').find('.carousel-sub-category').find('.top-fix')[0].innerText = x;
  });
  $('#jew-carousel').bind('slid.bs.carousel', function (e) {
    const x = $(this).find('.active .carousel-caption')[0].innerText;
    $(this).closest('.carousel-section').find('.carousel-sub-category').find('.top-fix')[0].innerText = x;
  });
});

function rightScroll() {
  document.getElementById('master-container').scrollBy(10, 0)
}
function leftScroll() {
  document.getElementById('master-container').scrollBy(-10, 0)
}
