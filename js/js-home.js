$(document).ready(function () {
  var scroll = $(window).scrollTop();
  $("#posicion").text(scroll);
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $("#posicion").text(scroll);
    /*Cambia el color del div cuando es distinto a 0*/
    if (scroll != 0) {
      $("#nav-bar").css({
        background: "rgba(255, 255, 255, 0.90)",
      });
    } else {
      $("#nav-bar").css({
        background: "white",
      });
    }
  });
});

$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".parallax").parallax();
});
