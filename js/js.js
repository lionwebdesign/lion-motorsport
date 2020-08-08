$(document).ready(function () {
  var scroll = $(window).scrollTop();
  $("#posicion").text(scroll);
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $("#posicion").text(scroll);
    /*Cambia el color del div cuando es distinto a 0*/
    if (scroll != 0) {
      $("#nav-bar").css({
        background: "rgba(0, 0, 0, 0.90)",
      });
    } else {
      $("#nav-bar").css({
        background: "transparent",
      });
    }
  });
});

$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".parallax").parallax();
});
