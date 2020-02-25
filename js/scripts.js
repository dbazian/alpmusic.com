$(document).ready(function() {

// CHECK IF ELEM IS SCROLLED INTO VIEW

  function isScrolledIntoView(elem) {
    var docViewTop = $("html, body").scrollTop();
    var docViewBottom = docViewTop + $("html, body").height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
      
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

  $("html, body").scroll(function() {

// IF APP SCREEN IS SCROLLED INTO VIEW

    $('.app-under-nav').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slide');
      } else {
        $(this).removeClass('slide') && $(this).addClass('app-visible');
      }
      });

// IF ABOUT SCREEN IS SCROLLED INTO VIEW

    $('.about-alp-video').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).get(0).play();
      } else {
        $(this).get(0).pause();
      }
      });

// CLIENT IMAGE GROWS WHEN CLIENT PAGE IS IN VIEW

      $('#client-pic').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('client-grow');
        } else {
          $(this).removeClass('client-grow');
        }
        });

        $('#client-pic-small').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('client-small-grow');
          } else {
            $(this).removeClass('client-small-grow');
          }
          });

    });

    // PAGE LOAD LOGO ANIMATION
    
    $('.white-bg-slide').addClass('slow-slide');
    $('#note1').addClass('note-animation1');
    $('#note2').addClass('note-animation2');
    $('#note3').addClass('note-animation3');
    $('#note4').addClass('note-animation4');
    $('#note5').addClass('note-animation5');

// TEAM ANIMATIONS

// DARRELL PICTURE ANIMATION
counterA = 0;
$("#darrell").click(function() {
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

// NICK PICTURE ANIMATION
counterB = 0;
$("#nick").click(function() {
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

// DAVE PICTURE ANIMATION

counterC = 0;
$("#dave").click(function() {
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

// TABLETS 

// TEAM ANIMATIONS 

// DARRELL IPAD ANIMATION 
counterA = 0;
$("#darrell-container-pad").click(function() {
 counterA++;
if (counterA % 2 == 1) {
    $("#darrell-pad").toggle();
    $("#db-name-pad").toggle();
    $("#nick-container-pad").toggle();
    $("#dave-container-pad").toggle();
    $("#darrell-info-pad").toggle();
    $("#darrell-full-pic").toggle(400);
  } else {
    $("#darrell-full-pic").toggle();
    $("#db-name-pad").toggle(400);
    $("#nick-container-pad").toggle();
    $("#dave-container-pad").toggle();
    $("#darrell-info-pad").toggle();
    $("#darrell-pad").toggle(400);
  }
});

// NICK IPAD ANIMATION
counterB = 0;
$("#nick-container-pad").click(function() {
  counterB++;
if (counterB % 2 == 1) {
  $("#nick-pad").toggle();
  $("#nm-name-pad").toggle();
  $("#dave-container-pad").toggle();
  $("#darrell-container-pad").toggle();
  $("#nick-info-pad").toggle();
  $("#nick-full-pic").toggle(400);
} else {
  $("#nick-full-pic").toggle();
  $("#nm-name-pad").toggle(400);
  $("#dave-container-pad").toggle();
  $("#darrell-container-pad").toggle();
  $("#nick-info-pad").toggle();
  $("#nick-pad").toggle(400);
  }
});

// DAVE IPAD ANIMATION 
counterC = 0;
$("#dave-container-pad").click(function() {
  counterC++;
if (counterC % 2 == 1) {
  $("#dave-pad").toggle();
  $("#dk-name-pad").toggle();
  $("#darrell-container-pad").toggle();
  $("#nick-container-pad").toggle();
  $("#dave-info-pad").toggle();
  $("#dave-full-pic").toggle(400);
} else {
  $("#dave-full-pic").toggle();
  $("#dk-name-pad").toggle(400);
  $("#darrell-container-pad").toggle();
  $("#nick-container-pad").toggle();
  $("#dave-info-pad").toggle();
  $("#dave-pad").toggle(400);
  }
});

// Play Song 1

$('#note1').click(function() {
  songOne.play();
  songTwo.pause();
  songTwo.currentTime = 0.0;
  songThree.pause();
  songThree.currentTime = 0.0;
  songFour.pause();
  songFour.currentTime = 0.0;
  songFive.pause();
  songFive.currentTime = 0.0;
  $("#song-switch-title").text("SONG TITLE")
  $("#song-switch-title-name").text("Samson The Mighty")
  $("#song-switch-album").text("ALBUM")
  $("#song-switch-album-name").text("Orchestral")
  $("#play").hide()
  $("#pause").show()
  .show()
})

// Play Song 2

$('#note2').click(function() {
  songOne.pause();
  songOne.currentTime = 0.0;
  songTwo.play();
  songThree.pause();
  songThree.currentTime = 0.0;
  songFour.pause();
  songFour.currentTime = 0.0;
  songFive.pause();
  songFive.currentTime = 0.0;
  $("#song-switch-title").text("SONG TITLE")
  $("#song-switch-title-name").text("Pier Light")
  $("#song-switch-album").text("ALBUM")
  $("#song-switch-album-name").text("Americana")
  $("#play").hide()
  $("#pause").show()
  .show()
})

// Play Song 3

$('#note3').click(function() {
  songOne.pause();
  songOne.currentTime = 0.0;
  songTwo.pause();
  songTwo.currentTime = 0.0;
  songThree.play();
  songFour.pause();
  songFour.currentTime = 0.0;
  songFive.pause();
  songFive.currentTime = 0.0;
  $("#song-switch-title").text("SONG TITLE")
  $("#song-switch-title-name").text("Invincible")
  $("#song-switch-album").text("ALBUM")
  $("#song-switch-album-name").text("Pop")
  $("#play").hide()
  $("#pause").show()
  .show()
})

// Play Song 4

$('#note4').click(function() {
  songOne.pause();
  songOne.currentTime = 0.0;
  songTwo.pause();
  songTwo.currentTime = 0.0;
  songThree.pause();
  songThree.currentTime = 0.0;
  songFour.play();
  songFive.pause();
  songFive.currentTime = 0.0;
  $("#song-switch-title").text("SONG TITLE")
  $("#song-switch-title-name").text("Queen Anne's Revenge")
  $("#song-switch-album").text("ALBUM")
  $("#song-switch-album-name").text("Rock")
  $("#play").hide()
  $("#pause").show()
  .show()
})

// Play Song 5

$('#note5').click(function() {
  songOne.pause();
  songOne.currentTime = 0.0;
  songTwo.pause();
  songTwo.currentTime = 0.0;
  songThree.pause();
  songThree.currentTime = 0.0;
  songFour.pause();
  songFive.currentTime = 0.0;
  songFive.play();
  $("#song-switch-title").text("SONG TITLE")
  $("#song-switch-title-name").text("Sun Kiss")
  $("#song-switch-album").text("ALBUM")
  $("#song-switch-album-name").text("Electronic")
  $("#play").hide()
  $("#pause").show()
  .show()
})

// MUTE AND UN MUTE BUTTON

$("#volume").click( function (){
        $("audio").prop('muted', true);
        $("#volume").hide()
        $("#mute").show()  
});

$("#mute").click( function (){
        $("audio").prop('muted', false);
        $("#volume").show()
        $("#mute").hide()
});

// Volume Slider

var volumeslider = document.getElementById('volumeslider');

function setvolume(){
  songOne.volume = volumeslider.value / 100;
  songTwo.volume = volumeslider.value / 100;
  songThree.volume = volumeslider.value / 100;
  songFour.volume = volumeslider.value / 100;
  songFive.volume = volumeslider.value / 100;
}

volumeslider.addEventListener("mousemove", setvolume);

// play pause button

$("#pause").click( function () {
  songOne.pause();
  songTwo.pause();
  songThree.pause();
  songFour.pause();
  songFive.pause();
  $("#pause").hide();
  $("#play").show();
})

$("#play").click( function () {
  if (songOne.currentTime > 0) {
      songOne.play();
} else if (songTwo.currentTime > 0) {
      songTwo.play();
} else if (songThree.currentTime > 0) {
      songThree.play();
} else if (songFour.currentTime > 0) {
      songFour.play();
} else if (songFive.currentTime > 0) {
      songFive.play();
}
  $("#play").hide();
  $("#pause").show();
})

// mute music if video is unmuted

var vid = document.getElementById('alp-video');

vid.onvolumechange = function () {
  songOne.pause();
  songTwo.pause();
  songThree.pause();
  songFour.pause();
  songFive.pause();
  $("#pause").hide();
  $("#play").show();
}

var firstsong = document.getElementById('songOne');
var secondsong = document.getElementById('songTwo');
var thirdsong = document.getElementById('songThree');
var fourthsong = document.getElementById('songFour');
var fifthsong = document.getElementById('songFive');

firstsong.onended = function () {
  songTwo.play();
}

secondsong.onended = function () {
  songThree.play();
}

thirdsong.onended = function () {
  songFour.play();
}

fourthsong.onended = function () {
  songFive.play();
}

fifthsong.onended = function () {
  songOne.play();
}
});

// MOBILE SCRIPTS

function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("main-text");
  var z = document.getElementById("mobile-logo")
  if (x.style.display === "block") {
    x.style.display = "none";

  } else {
    x.style.display = "block";

  }
}

