// new fullpage('#fullpage', {
//   autoScrolling:true,
//   // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
//   scrollHorizontally: true,
// });
// console.log("hey");
//   $(window).scroll(function() {
//   	console.log("hey");
//    if ($(this).scrollTop()>0)
//     {
//      $('.navbar').fadeOut();
//     }
//    else
//     {
//      $('.navbar').fadeIn();
//     }
// });

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}