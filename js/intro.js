var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: $(document).height(),
    width: $(document).width(),
    videoId: 'QfBps-OSFlU',
    playerVars: {
      controls: "0",
      showinfo: "0",
      modestbranding: "1",
      vq:"hd720"
    },
    events: {
      'onReady': function(event) {
        event.target.playVideo();
      },
      'onStateChange': onPlayerStateChange
    }
  });
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 12000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}