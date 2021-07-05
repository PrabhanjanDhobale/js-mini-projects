const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Functions
function playVideo() {
    video.play();
}

function updateProgess() {
    progress.value = (video.currentTime / video.duration) * 100;

    // for minutes
    let min = Math.floor(video.currentTime / 60);
    if (min < 10) {
        min = '0' + String(min);
    }

    // for seconds
    let sec = Math.floor(video.currentTime % 60);
    if (sec < 10) {
        sec = '0' + String(sec);
    }

    timestamp.innerHTML = min + ":" + sec;
}

function stopVideo() {
    video.pause()
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Event Listeners
video.addEventListener('click', playVideo);
video.addEventListener('timeupdate', updateProgess);

play.addEventListener('click', playVideo);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

