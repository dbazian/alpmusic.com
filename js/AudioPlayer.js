$(document).ready(() => {
  $("#note1").click(function () {
    songOne.play();
    songTwo.pause();
    songTwo.currentTime = 0.0;
    songThree.pause();
    songThree.currentTime = 0.0;
    songFour.pause();
    songFour.currentTime = 0.0;
    songFive.pause();
    songFive.currentTime = 0.0;
    $("#song-switch-title").text("SONG TITLE");
    $("#song-switch-title-name").text("Samson The Mighty");
    $("#song-switch-album").text("ALBUM");
    $("#song-switch-album-name").text("Orchestral");
    $("#play").hide();
    $("#pause").show().show();
  });

  $("#note2").click(function () {
    songOne.pause();
    songOne.currentTime = 0.0;
    songTwo.play();
    songThree.pause();
    songThree.currentTime = 0.0;
    songFour.pause();
    songFour.currentTime = 0.0;
    songFive.pause();
    songFive.currentTime = 0.0;
    $("#song-switch-title").text("SONG TITLE");
    $("#song-switch-title-name").text("Pier Light");
    $("#song-switch-album").text("ALBUM");
    $("#song-switch-album-name").text("Americana");
    $("#play").hide();
    $("#pause").show().show();
  });

  $("#note3").click(function () {
    songOne.pause();
    songOne.currentTime = 0.0;
    songTwo.pause();
    songTwo.currentTime = 0.0;
    songThree.play();
    songFour.pause();
    songFour.currentTime = 0.0;
    songFive.pause();
    songFive.currentTime = 0.0;
    $("#song-switch-title").text("SONG TITLE");
    $("#song-switch-title-name").text("Invincible");
    $("#song-switch-album").text("ALBUM");
    $("#song-switch-album-name").text("Pop");
    $("#play").hide();
    $("#pause").show().show();
  });

  $("#note4").click(function () {
    songOne.pause();
    songOne.currentTime = 0.0;
    songTwo.pause();
    songTwo.currentTime = 0.0;
    songThree.pause();
    songThree.currentTime = 0.0;
    songFour.play();
    songFive.pause();
    songFive.currentTime = 0.0;
    $("#song-switch-title").text("SONG TITLE");
    $("#song-switch-title-name").text("Queen Anne's Revenge");
    $("#song-switch-album").text("ALBUM");
    $("#song-switch-album-name").text("Rock");
    $("#play").hide();
    $("#pause").show().show();
  });

  $("#note5").click(function () {
    songOne.pause();
    songOne.currentTime = 0.0;
    songTwo.pause();
    songTwo.currentTime = 0.0;
    songThree.pause();
    songThree.currentTime = 0.0;
    songFour.pause();
    songFive.currentTime = 0.0;
    songFive.play();
    $("#song-switch-title").text("SONG TITLE");
    $("#song-switch-title-name").text("Sun Kiss");
    $("#song-switch-album").text("ALBUM");
    $("#song-switch-album-name").text("Electronic");
    $("#play").hide();
    $("#pause").show().show();
  });

  $("#volume").click(function () {
    $("audio").prop("muted", true);
    $("#volume").hide();
    $("#mute").show();
  });

  $("#mute").click(function () {
    $("audio").prop("muted", false);
    $("#volume").show();
    $("#mute").hide();
  });

  var volumeslider = document.getElementById("volumeslider");

  function setvolume() {
    songOne.volume = volumeslider.value / 100;
    songTwo.volume = volumeslider.value / 100;
    songThree.volume = volumeslider.value / 100;
    songFour.volume = volumeslider.value / 100;
    songFive.volume = volumeslider.value / 100;
  }

  volumeslider.addEventListener("mousemove", setvolume);

  $("#pause").click(function () {
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    $("#pause").hide();
    $("#play").show();
  });

  $("#play").click(function () {
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
  });

  var vid = document.getElementById("alp-video");

  vid.onvolumechange = function () {
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    $("#pause").hide();
    $("#play").show();
  };

  var firstsong = document.getElementById("songOne");
  var secondsong = document.getElementById("songTwo");
  var thirdsong = document.getElementById("songThree");
  var fourthsong = document.getElementById("songFour");
  var fifthsong = document.getElementById("songFive");

  firstsong.onended = function () {
    songTwo.play();
  };

  secondsong.onended = function () {
    songThree.play();
  };

  thirdsong.onended = function () {
    songFour.play();
  };

  fourthsong.onended = function () {
    songFive.play();
  };

  fifthsong.onended = function () {
    songOne.play();
  };
});
