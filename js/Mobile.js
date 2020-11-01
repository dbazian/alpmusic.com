$(document).ready(() => {
  $("#mobile-logo").addClass("mob-logo-ani");
  $("#mob-hq").addClass("mob-t1-ani");
  $("#mob-ql").addClass("mob-t2-ani");
  $("#mob-ml").addClass("mob-t3-ani");

  counterD = 0;
  $("#nav-bar-image, #mob-app, #mob-about, #mob-home, #mob-clients, #mob-team, #mob-contact").click(function () {
    counterD++;
    if (counterD % 2 == 1) {
      $("#myLinks").toggle().addClass("fall-down");
    } else {
      $("#myLinks").toggle(400);
      $("#myLinks").removeClass("fall-down");
    }
  });

  counterE = 0;
  $(".mobile-team").click(function () {
    counterE++;
    if (counterE % 2 == 1) {
      $(".m-team-pic").toggle(400);
      $(".mob-hidden").toggle(400);
      $(".m-team-pic-small").delay(400).toggle(400);
      $("#team-title").fadeTo("fast", 0);
    } else {
      $(".m-team-pic").delay(400).toggle(400);
      $(".mob-hidden").toggle(400);
      $(".m-team-pic-small").toggle(400);
      $("#team-title").delay(400).fadeTo("slow", 1);
    }
  });
});
