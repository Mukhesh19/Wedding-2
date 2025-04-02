// Music control
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.innerHTML = '<i class="fa fa-music"></i><span>Muzik</span>';
  } else {
    music.play();
    musicBtn.innerHTML = '<i class="fa fa-pause"></i><span>Muzik</span>';
  }
  isPlaying = !isPlaying;
});

// RSVP button scroll
document.getElementById("rsvp-btn").addEventListener("click", () => {
  document.getElementById("rsvp").scrollIntoView({ behavior: "smooth" });
});

// Optional: Add calendar, map, contact logic here as needed
