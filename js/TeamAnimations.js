$(document).ready(() => {
  counterA = 0;
  $("#darrell").click(function () {
    counterA++;
    if (counterA % 2 == 1) {
      $("#darrell").toggle();
      $("#db-name").toggle();
      $("#nick").toggle();
      $("#nm-name").toggle();
      $("#dave").toggle();
      $("#dk-name").toggle();
      $("#darrell-info").delay(400).toggle(200);
      $("#darrell").toggle(400);
    } else {
      $("#darrell").toggle();
      $("#db-name").delay(800).toggle(400);
      $("#nick").delay(400).toggle(400);
      $("#nm-name").delay(800).toggle(400);
      $("#dave").delay(400).toggle(400);
      $("#dk-name").delay(800).toggle(400);
      $("#darrell-info").toggle();
      $("#darrell").toggle(400);
    }
  });

  counterB = 0;
  $("#nick").click(function () {
    counterB++;
    if (counterB % 2 == 1) {
      $("#nick").toggle();
      $("#nm-name").toggle();
      $("#dave").toggle();
      $("#dk-name").toggle();
      $("#darrell").toggle();
      $("#db-name").toggle();
      $("#nick-info").delay(400).toggle(200);
      $("#nick").toggle(400);
    } else {
      $("#nick").toggle();
      $("#nm-name").delay(800).toggle(400);
      $("#dave").delay(400).toggle(400);
      $("#dk-name").delay(800).toggle(400);
      $("#darrell").delay(400).toggle(400);
      $("#db-name").delay(800).toggle(400);
      $("#nick-info").toggle();
      $("#nick").toggle(400);
    }
  });

  counterC = 0;
  $("#dave").click(function () {
    counterC++;
    if (counterC % 2 == 1) {
      $("#dave").toggle();
      $("#dk-name").toggle();
      $("#darrell").toggle();
      $("#db-name").toggle();
      $("#nick").toggle();
      $("#nm-name").toggle();
      $("#dave-info").delay(400).toggle(200);
      $("#dave").toggle(400);
    } else {
      $("#dave").toggle();
      $("#dk-name").delay(800).toggle(400);
      $("#darrell").delay(400).toggle(400);
      $("#db-name").delay(800).toggle(400);
      $("#nick").delay(400).toggle(400);
      $("#nm-name").delay(800).toggle(400);
      $("#dave-info").toggle();
      $("#dave").toggle(400);
    }
  });
});
