$(document).ready(function () {

  var controller = new ScrollMagic.Controller();

  // var scene6 = new ScrollMagic.Scene({
  //   triggerElement: '.navbar',
  // })
  //   .setClassToggle('.navbar', 'disappear')
  //   .addTo(controller);

  $('.left').each(function () {
    // moving objects to left 50px
    var scene2 = new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'animLeft')
      .addTo(controller);
  });

  $('.up').each(function () {
    // moving objects to up 50px
    var scene3 = new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'animUp')
      .addTo(controller);
  });

  $('.right2').each(function () {
    // moving objects to right 80px
    var scene4 = new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'animRight2')
      .addTo(controller);
  });

  $('.down').each(function () {
    // moving objects to down 50px
    var scene5 = new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'animDown')
      .addTo(controller);
  });

  $('.right').each(function () {
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
      .setClassToggle(this, 'animRight')
      .addTo(controller);
  });

  var scene7 = new ScrollMagic.Scene({
    triggerElement: '#nav'
  })
    .setClassToggle('#nav', 'hide')
    .addTo(controller);

});

