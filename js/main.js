

var index = 1,
      playlist = ['movies/funnle.m4v'],
      video = document.getElementById('awesome_video');

  video.addEventListener('ended', rotate_video, false);

  function rotate_video() {
    video.setAttribute('src', playlist[index]);
    video.load();
    index++;
    if (index >= playlist.length) { index = 0; }
  }

  var h=window.innerHeight;
var backgroundVideo=document.getElementById("awesome_video");  
backgroundVideo.style.height=h;