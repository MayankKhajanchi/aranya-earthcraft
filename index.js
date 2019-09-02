function width() {
  if ($(document).width() <= 576) {
    var cat_carousel = document.querySelector(".carousel-section");
    var cat_side = document.querySelector(".side-section");
    $(cat_carousel).addClass("order-12");
    $(cat_side).addClass("order-1");
  } else if ($(document).width() > 576) {
    var cat_carousel = document.querySelector(".carousel-section");
    var cat_side = document.querySelector(".side-section");
    $(cat_carousel).addClass("order-1");
    $(cat_side).addClass("order-12");
  }
  var mk = window.innerHeight;
  $('.section').css('max-height', mk)
}

width();

$(document).ready(function () {
  $('.bypass').click(function (event) {
    const pic = $(this).closest('.section').find('.carousel-item.active img').attr('src');
    // $('.modal-body').html('<img src="' + pic + '" />')
    console.log(pic);
    $('.modal-body').css("background-image", `url(${pic})`);
    $('#exampleModal').modal('toggle');
  });
});

function rightScroll() {
  document.getElementById('master-container').scrollBy(10, 0)
}
function leftScroll() {
  document.getElementById('master-container').scrollBy(-10, 0)
}
