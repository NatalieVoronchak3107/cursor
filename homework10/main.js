/* Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш та відтворювати унікальний звук для кожної клавіши 
(клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати). */
function stopAllAudio() {
  const allAudio = document.querySelectorAll("audio");
  allAudio.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

function playSoundAndChangeBackground(keyCode) {
  const audio = document.querySelector(`audio[id="${keyCode}"]`);
  const img = document.querySelector(`img[id="img-${keyCode}"]`);
  const keyElement = document.querySelector(`.key[id="${keyCode}"]`);

  if (!audio) return;

  stopAllAudio();

  audio.currentTime = 0;
  audio.play();

  const visibleImage = document.querySelector("img.visible");
  if (visibleImage) visibleImage.classList.remove("visible");
  img.classList.add("visible");

  keyElement.classList.add("playing");
}

// Видалити клас "playing" після анімації
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", () => playSoundAndChangeBackground(key.id));
  key.addEventListener("transitionend", function (event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  });
});
