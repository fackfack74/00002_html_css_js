//  youtube play
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true,      //  자동재생
            loop: true,          // 반복재생
            playlist: 'An6LvWQuj_8',
        },
        events:{
            onReady: function(event){
                event.target.mute();
            }
        }
    });
}

//      https://youtu.be/An6LvWQuj_8?list=TLGG-ZDhXc3JhNozMTA3MjAyNQ