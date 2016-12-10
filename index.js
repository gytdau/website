$(function() {
  setTimeout(function() {
    $(".que-1").removeClass("hidden").addClass("animated fadeInUp")
  }, 100)
  setTimeout(function() {
    $(".que-2").removeClass("hidden").addClass("animated fadeInUp")
  }, 200)
  setTimeout(function() {
    $(".que-3").removeClass("hidden").addClass("animated fadeInUp")
  }, 300)
  setTimeout(function() {
    $(".que-4").removeClass("hidden").addClass("animated fadeInUp")
  }, 400)
  setTimeout(function() {
    $(".que-5").removeClass("hidden").addClass("animated fadeInUp")
  }, 700)
  setTimeout(function() {
    $(".que-6").removeClass("hidden").addClass("animated fadeInUp")
  }, 900)

  $("#animate-waypoint").waypoint({
    handler: function() {
      $(".to-highlight").addClass("highlight");
    },
    offset: '50%'
  });
})
