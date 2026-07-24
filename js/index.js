var audio = document.getElementById("audio");
audio.play();

document.querySelectorAll(".sound-btn[data-sound]").forEach(function(btn) {
    btn.addEventListener("click", function() {
        audio.src = "./res/" + this.getAttribute("data-sound") + ".mp3";
        audio.play();
    });
});

document.getElementById("restartBtn").addEventListener("click", function() {
    audio.currentTime = 0;
});

document.getElementById("stopBtn").addEventListener("click", function() {
    audio.pause();
});
