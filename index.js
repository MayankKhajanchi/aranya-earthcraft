setTimeout(function () {
  $('.down-arrow, .left-arrow, .right-arrow').hide();
}, 10000);

function scroll() {
  // window.scrollBy(0, 500);
  console.log("hey");
}

function scrollDown(x, y) {
  console.log('hey');
  window.scrollBy(x, y);
}