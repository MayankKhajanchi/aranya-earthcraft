setTimeout(function () {
  $('.down-arrow, .left-arrow, .right-arrow').hide();
}, 10000);

function width(){
  if($(document).width() < 576){
  	var cat_carousel = document.querySelector(".carousel-section");
  	var cat_side = document.querySelector(".side-section");
  	$(cat_carousel).addClass("order-12");
  	$(cat_side).addClass("order-1");
  }else if($(document).width() > 576){
  	var cat_carousel = document.querySelector(".carousel-section");
  	var cat_side = document.querySelector(".side-section");
  	$(cat_carousel).addClass("order-1");
  	$(cat_side).addClass("order-12");
  }
  var mk = window.innerHeight;
  console.log(mk);
  $('html').css('max-height', mk)
}

width();

