if (localStorage.getItem("paf_grup") !== "masuk") {
  alert("Kamu belum masuk grup! Balik dulu ke halaman utama.");
  window.location.href = "index.html";
}

let index = 0;
let isRepeating = false;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

function loadSong(i) {
  const song = playlist[i];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  index = (index + 1) % playlist.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + playlist.length) % playlist.length;
  loadSong(index);
  audio.play();
}

function toggleRepeat() {
  isRepeating = !isRepeating;
  audio.loop = isRepeating;
  alert(isRepeating ? "Repeat Aktif ✅" : "Repeat Nonaktif ❌");
}

window.onload = () => {
  loadSong(index);
};

audio.addEventListener('ended', () => {
  if (!isRepeating) nextSong();
});
