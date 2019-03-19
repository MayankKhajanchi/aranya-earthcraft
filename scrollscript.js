$(document).ready(function () {

  var controller = new ScrollMagic.Controller();

  // moving objects to right 50px
  var scene = new ScrollMagic.Scene({
    triggerElement: '.right',
  })
    .setClassToggle('.right', 'animRight')
    .addTo(controller);

  // moving objects to up 50px
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.up',
  })
    .setClassToggle('.up', 'animUp')
    .addTo(controller);

  // moving objects to right 80px
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.right2',
  })
    .setClassToggle('.right2', 'animRight2')
    .addTo(controller);

  // moving objects to down 50px
  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.down',
  })
    .setClassToggle('.down', 'animDown')
    .addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    triggerElement: '.left',
  })
    .setClassToggle('.left', 'animLeft')
    .addTo(controller);

});

