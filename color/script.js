function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + (hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
}

$(function() {
  $(".color").click(function() {
    $("#pri").hide();
    $("#thi").hide();
    $("#sec").show();
    var color = $(this).data('color') + "-"
    
    // Non-accented colors
    for(i = 1; i <= 9; i++) {
      $("#col" + i).removeClass()
        .addClass("color color3 " + color + i)
      $("#col" + i).html("<span class='muted'>" + i + "00</span><br>" +rgb2hex($("#col" + i).css("background-color")));
    }
    
    // Accented colors
    // These can't be looped (easily) - the numbers go: 1, 2, 4, 7
    $("#cola1").removeClass()
        .addClass("color color2 " + color + "A1")
    $("#cola1").html("<span class='muted'>100</span><br>" + rgb2hex($("#cola1").css("background-color")));
    
    $("#cola2").removeClass()
        .addClass("color color2 " + color + "A2")
    $("#cola2").html("<span class='muted'>200</span><br>" + rgb2hex($("#cola2").css("background-color")));
    
    $("#cola3").removeClass()
        .addClass("color color2 " + color + "A4")
    $("#cola3").html("<span class='muted'>400</span><br>" + rgb2hex($("#cola3").css("background-color")));
    
    $("#cola4").removeClass()
        .addClass("color color2 " + color + "A7")
    $("#cola4").html("<span class='muted'>700</span><br>" + rgb2hex($("#cola4").css("background-color")));
    
  });
  $("#back1, #back2").click(function() {
    $("#pri").show();
    $("#sec").hide();
    $("#thi").hide();
  });
  $("#showAccents").click(function() {
    $("#sec").hide();
    $("#thi").show();
  });
  $("#hideAccents").click(function() {
    $("#thi").hide();
    $("#sec").show();
  });
});