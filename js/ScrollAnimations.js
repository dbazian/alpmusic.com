$(document).ready(() => {
  function isScrolledIntoView(elem) {
    var docViewTop = $("html, body").scrollTop();
    var docViewBottom = docViewTop + $("html, body").height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  $("html, body").scroll(() => {
    $(".app-under-nav").each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("slide");
      } else {
        $(this).removeClass("slide") && $(this).addClass("app-visible");
      }
    });

    $(".about-alp-video").each(function () {
      isScrolledIntoView(this) ? $(this).get(0).play() : $(this).get(0).pause();
    });

    $("#client-pic").each(function () {
      isScrolledIntoView(this) ? $(this).addClass("client-grow") : $(this).removeClass("client-grow");
    });
  });

  $(".white-bg-slide").addClass("slow-slide");
  $("#note1").addClass("note-animation1");
  $("#note2").addClass("note-animation2");
  $("#note3").addClass("note-animation3");
  $("#note4").addClass("note-animation4");
  $("#note5").addClass("note-animation5");

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
