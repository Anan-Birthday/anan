const qualitySelect = document.getElementById("quality-select");
const moonImage = document.getElementById("moon-image");
const friendVideo = document.getElementById("friend-video");
const song = document.getElementById("song");

qualitySelect.addEventListener("change", (event) => {
  const quality = event.target.value;
  
  if (quality === "1080") {
    // Hide moon image and show video
    moonImage.style.display = "none";
    friendVideo.hidden = false;

    // Play video and song
    friendVideo.play();
    song.play();
  } else {
    // Change moon image based on selected quality
    moonImage.src = `moon_${quality}.jpg`;
    moonImage.style.display = "block";
    friendVideo.hidden = true;

    // Pause video and song
    friendVideo.pause();
    song.pause();
  }
});