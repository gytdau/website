$(function () {
  setTimeout(function () {
    $(".que-1").removeClass("hidden").addClass("animated fadeInUp")
  }, 100)
  setTimeout(function () {
    $(".que-2").removeClass("hidden").addClass("animated fadeInUp")
  }, 200)
  setTimeout(function () {
    $(".que-3").removeClass("hidden").addClass("animated fadeInUp")
  }, 300)
  setTimeout(function () {
    $(".que-4").removeClass("hidden").addClass("animated fadeInUp")
  }, 400)
  setTimeout(function () {
    $(".que-5").removeClass("hidden").addClass("animated fadeInUp")
  }, 700)
  setTimeout(function () {
    $(".que-6").removeClass("hidden").addClass("animated fadeInUp")
  }, 900)

  $("#animate-waypoint").waypoint({
    handler: function () {
      $(".to-highlight").addClass("highlight");
    },
    offset: '50%'
  });
})
var controller = new ScrollMagic.Controller();

var duration = $(window).height();
function offset(scale) {
  return (duration * scale) + "px";
}
function shadow(scale) {
  switch (scale) {
    case 1:
      return "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
    case 2:
      return "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    case 3:
      return "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";
    case 4:
      return "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    case 5:
      return "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)";
  }
}

new ScrollMagic.Scene({ triggerElement: "#trigger-1", duration: duration, tweenChanges: true })
  .setTween("#animate-1-1", { scale: 0.8, top: offset(0.25), transform: "rotateY(30deg)" }) // the tween durtion can be omitted and defaults to 1
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger-1", duration: duration, tweenChanges: true })
  .setTween("#animate-1-2", { scale: 0.8, top: offset(0.15), transform: "rotateY(-10deg)" }) // the tween durtion can be omitted and defaults to 1
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger-1", duration: duration, tweenChanges: true })
  .setTween("#animate-1-3",
    {
      scale: 1.2,
      top: offset(0.3),
      transform: "rotateY(-10deg)",
      right: "1.9em",
      boxShadow: shadow(3)
    })
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger-2", duration: duration, tweenChanges: true })
  .setTween("#animate-2-1", { scale: 0.8, top: offset(0.25), transform: "rotateY(30deg)" }) // the tween durtion can be omitted and defaults to 1
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger-2", duration: duration, tweenChanges: true })
  .setTween("#animate-2-2", { scale: 0.8, top: offset(0.15), transform: "rotateY(-10deg)" }) // the tween durtion can be omitted and defaults to 1
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger-2", duration: duration, tweenChanges: true })
  .setTween("#animate-2-3",
    {
      top: offset(0.2),
      transform: "rotateY(-15deg) scale(0.5)",
      boxShadow: shadow(3)
    })
  .addTo(controller);